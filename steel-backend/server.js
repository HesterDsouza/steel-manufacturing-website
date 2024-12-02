import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { CONFIG } from "./config.js";
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
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

// admin
app.use("/api/admin", adminRoutes);
// product
app.use("/api/products", productRoutes);
// contact
app.use("/api/contact", contactRoutes);


// Start Server
app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on port ${CONFIG.PORT}`);
})