import express from "express"
import Contact from "../models/Contact.js";

const router = express.Router();

// Send a new query
router.post("/", async(req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        res.status(422).json({ message: "Error submitting form", error})
    }
});

// Fetch all query
router.get("/", async(req, res) => {
    try {
        const queries = await Contact.find();
        res.status(200).json(queries);
    } catch (error) {
        res.status(404).json({message: "Error fetching queries", error})
    }
})

// Fetch single query
router.get("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const query = await Contact.findById(id);
        res.status(200).json(query);
    } catch (error) {
        res.status(404).json({message: "Error fetching query", error})
    }
});

// Update Query Status
router.put("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
        const updatedQuery = await Contact.findByIdAndUpdate(
            id, {status}, {new: true}
        )
        res.status(200).json(updatedQuery)
    } catch (error) {
        res.status(403).json({message: "Error updating query status", error})
    }
});

// Delete Query
router.delete("/:id", async(req, res) => {
    try {
        const {id} = req.params
        await Contact.findByIdAndDelete(id);
        res.status(200).json({message: "Query deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Error deleting query", error})
    }
})

export default router;