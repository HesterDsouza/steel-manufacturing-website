import express from "express"
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";
import multer from "multer";

const router = express.Router();

// Add new Product
router.post("/", auth, async(req, res) => {
    const { title, images, description, details } = req.body;

    if(!title || !images || !details) 
        return res.status(400).json({ message: "Title, images and details information is necessary" });
    
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

// Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const safeFileName = file.originalname.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
        cb(null, `${Date.now()}_${safeFileName}`);
    }
})

// Multer Image upload middleware
const upload = multer({
    storage: storage, limits: { fileSize: 2 * 1024 * 1024}
})

// Image upload route
router.post("/uploads", auth, upload.array("images", 4), (req, res) => {
    try {
        if(!req.files || req.files.length === 0)
            return res.status(400).json({ message: "No files were uploaded" });
        const urls = req.files.map((file) => `/uploads/${file.filename}`);
        res.status(200).json({ urls })
    } catch (error) {
        console.error("Error uploading image:", error)
        res.status(500).json({ message: "Error uploading image", error})
    }
})

// Get All Products
router.get("/", async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
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
        const regex = new RegExp(query.trim(), "i");
        const skip = (Number(page - 1)) * Number(limit);

        const aggregatedResults = await Product.aggregate([
            { $unwind: "$details" },
            { 
                $match: {
                    $or: [
                        { title: { $regex: regex} },
                        { description: { $regex: regex} },
                        { "details.description": { $regex: regex } }
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
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if(!deletedProduct) return res.status(404).json({ message: "Product not found" });

        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (error) {
        res.status(422).json({ message: "Error deleting product", error})
    }
})
export default router;