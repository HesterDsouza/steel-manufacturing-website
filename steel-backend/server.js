import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { CONFIG } from "./config.js";
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Connection error: ", error));

// Serving static files
app.use("/uploads", (req, res, next) => {
    const filePath = path.join(__dirname, "uploads", req.url);
    console.log("Requested File Path:", filePath)
    next();
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/uploads", (req, res, next) => {
//     const allowedExtentions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
//     const fileExtention = path.extname(req.url).toLowerCase();
//     if(!allowedExtentions.includes(fileExtention))
//         return res.status(403).json({ message: "Forbidden File Type"});
//     next();
// })

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);

// Handling undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found"})
})

// Start Server
app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on port ${CONFIG.PORT}`);
})