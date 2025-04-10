import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { CONFIG } from "./config.js";
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static File handling
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Connection error: ", error));

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