import express from "express"
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/contact", async(req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        res.status(422).json({ message: "Error submitting form", error})
    }
})

export default router;