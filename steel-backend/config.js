import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 8000,
}