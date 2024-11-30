import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Connection error: ", error));

// Routes
// Test
app.get("/api/test", async(req, res) => {
    res.send("Test API Route");
});

// product
app.use("/api/products", productRoutes);
// contact
app.use("/api/contact", contactRoutes);


// Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})