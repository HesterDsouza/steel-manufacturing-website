import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    images: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    details: {
        type: [{
            image: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }]
    }
});

productSchema.index({ title: "text", description: "text", "details.description" : "text" });

export default mongoose.model('Product', productSchema);