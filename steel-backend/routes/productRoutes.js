import express from "express"
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

// Add new Product
router.post("/", auth, async(req, res) => {
    const { title, images, description, details } = req.body;

    if(!title || !images || !details) 
        return res.status(400).json({ message: "Title, images and details information is necessary" });

    for(const detail of details) {
        if(!detail.image || !detail.description)
            return res.status(400).json({ message: "Each detail must have an image and a description" });
    }
    
    try {
        const newProduct = new Product({
            title, images, description, details
        });

        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(422).json({ message: "Error adding product", error})
    }
})

// Multer Storage and Upload
const storage = multer.memoryStorage()
const upload = multer({
    storage: storage, limits: { fileSize: 2 * 1024 * 1024}
})

// Image upload route
router.post("/uploads", auth, upload.array("images", 4), async (req, res) => {
    try {
        if(!req.files || req.files.length === 0)
            return res.status(400).json({ message: "No files were uploaded" });

        // Upload file to Cloudinary
        const uploadToCloudinary = (file) => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {folder: "uploads"},
                    (error, result) => {
                        if (error) reject(error)
                        else resolve(result.secure_url) 
                    }
                )
                uploadStream.end(file.buffer)
            })
        }
        const uploadPromises = req.files.map((file) => uploadToCloudinary(file));            
        const urls = await Promise.all(uploadPromises);

        res.status(200).json({ urls })
    } catch (error) {
        console.error("Error uploading image:", error)
        res.status(500).json({ message: "Error uploading image", error})
    }
})

// Get All Products
router.get("/", async(req, res) => {
    const lang = req.query.lang === "ar" ? "ar" : "en"

    try {
        const products = await Product.find();

        const translated = products.map(product => ({
            _id: product._id,
            title: product.title,
            description: product.description,
            images: product.images,
            details: product.details.map(detail => ({
                image: detail.image,
                description: detail.description
            }))
        }))

        res.status(200).json(translated);
    } catch (error) {
        res.status(404).json({ message: "Error fetching products", error});
    }
})

// Search Products
router.get("/search", async(req, res) => {
    const { query, page = 1, limit = 12 } = req.query;
    
    if(!query || query.trim().length === 0 || query.length > 50 || /[^a-zA-Z\s ]/.test(query))
        return res.status(400).json({ message: "Invalid search query. Only letters and spaces are allowed." });

    try {
        const lang = req.query.lang === "ar" ? "ar" : "en";
        const regex = new RegExp(query.trim(), "i");
        const skip = (Number(page - 1)) * Number(limit);

        const aggregatedResults = await Product.aggregate([
            { $unwind: "$details" },
            { 
                $match: {
                    $or: [
                        { [`title.${lang}`]: { $regex: regex} },
                        { [`description.${lang}`]: { $regex: regex} },
                        { [`details.description.${lang}`]: { $regex: regex } }
                    ]
                } 
            },
            { $facet: {
                totalRecords: [{ $count: "count" }],
                paginatedResults: [
                    { $skip: skip },
                    { $limit: Number(limit) }
                ]
            } }
        ]);

        const totalDetailsCount = 
            aggregatedResults[0].totalRecords.length 
            ? aggregatedResults[0].totalRecords[0].count 
            : 0;
        
        if(!totalDetailsCount)
            return res.status(404).json({ message: "No products found" });

        res.status(200).json({
            totalRecords: totalDetailsCount,
            totalPages: Math.ceil(totalDetailsCount / Number(limit)),
            currentPage: Number(page),
            products: aggregatedResults[0].paginatedResults
        });

        // console.log("Total Records: ", totalRecords)
        // console.log("Total Pages: ", Math.ceil(totalRecords / limit))
    } catch (error) {
        res.status(500).json({ message: "Error searching products", error });
    }
})

// Get Product by ID
router.get("/:id", async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({ message: "Product not found"});
        res.json(product);
    } catch (error) {
        res.status(404).json({ message: "Error fetching product", error});
    }
})

// Update Product
router.put("/:id", auth, async(req, res) => {
    const { title, images, description, details } = req.body;

    if(!title || !images || !details) 
        return res.status(400).json({ message: "Title, images and details information is necessary" });

    for(const detail of details) {
        if(!detail.image || !detail.description)
            return res.status(400).json({ message: "Each detail must have an image and a description" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { title, images, description, details },
            { new: true, runValidators: true}
        );

        if(!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct})
    } catch (error) {
        res.status(422).json({ message: "Error updating product", error})
    }
})

// Delete Product
router.delete("/:id", auth, async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({ message: "Product not found"});

        const allImgs = [...product.images, ...product.details.map(detail => detail.image)];

        // Delete images from Cloudinary
        const deletedPromises = allImgs.map(async (url) => {
            const publicId = url.split("/uploads/")[1].split(".")[0].replace(/\?.*$/, "");
            const fullPublicId = `uploads/${publicId}`
            console.log(`Deleting image: ${fullPublicId}`);
            try {
                const result = await cloudinary.uploader.destroy(fullPublicId, {invalidate: true});
                return console.log(`Cloudinary delete result: ${JSON.stringify(result)}`);
            } catch (error) {
                return console.error(`Error deleting image from Cloudinary: ${error}`);
            }
        })

        await Promise.all(deletedPromises);

        await product.deleteOne();

        res.status(200).json({ message: "Product deleted successfully", product});
    } catch (error) {
        res.status(422).json({ message: "Error deleting product", error})
    }
})
export default router;