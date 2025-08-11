import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        en:{
            type: String,
            required: true,
            unique: true
        },
        ar:{
            type: String,
            required: true,
            unique: true
        },
    },
    images: {
        type: [String],
        required: true
    },
    description: {
        en:{
            type: String,
            default: ""
        },
        ar: {
            type: String,
            default: ""
        }
    },
    details: {
        type: [{
            image: {
                type: String,
                required: true
            },
            description: {
                en:{
                    type: String,
                    required: true
                },
                ar: {
                    type: String,
                    required: true
                }
            }
        }]
    }
});

productSchema.index({ 
    "title.en": "text", "title.ar": "text", 
    "description.en": "text", "description.ar": "text", 
    "details.description.en" : "text", "details.description.ar" : "text" 
});

export default mongoose.model('Product', productSchema);