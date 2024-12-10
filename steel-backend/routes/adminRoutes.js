import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import Admin from '../models/Admin.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.)(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

router.post("/create-admin", async(req,res) => {
    const {email, password} = req.body;

    try {
        if(!email || !/^\S+@\S+\.\S{2,}$/.test(email))
            return res.status(400).json({ message: "Invalid email format" });

        if(!password_regex.test(password))
            return res.status(400).json({ 
                message: "Password must be 8-16 characters long, contain at least one upper case letter, one lowercase letter, one number, and one special character." 
            });

        const existingAdmin = await Admin.findOne({ email });
        if(existingAdmin)
            return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({ email, password: hashedPassword });
        await newAdmin.save();

        res.status(201).json({message: 'Admin created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error});
    }
})

router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    // if(!JWT_SECRET) return res.status(500).json({ message: "JWT secret key not defined!"})

    try{
        const admin = await Admin.findOne({ email });
        if(!admin) return res.status(404).json({ message: 'Admin not found' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) return res.status(401).json({ message: 'Invalid credentials'});

        const token = jwt.sign({ id: admin._id }, JWT_SECRET, {expiresIn: '2h'});
        const refreshToken = jwt.sign({ id: admin._id }, JWT_SECRET, {expiresIn: '7d'});

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        })
        
        // if(!token) return res.status(500).json({ message: 'Failed to generate token' });

        res.json({ message: "Login Successful", token })
    } catch(error) {
        console.error("Login Error: ", error)
        res.status(500).json({ message: "Server Error", error });
    } 
});

router.post("/refresh-token", (req, res) => {
    const { refreshToken } = req.cookies;

    if(!refreshToken) return res.status(401).json({ message: "Unauthorized", error: "No refresh token found" });

    try {
        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        const newAccessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, {expiresIn: '2h'});
        res.json({ token: newAccessToken });
    } catch (error) {
        console.error("Refresh Token Error: ", error);
        res.status(401).json({ message: "Unauthorized", error });
    }
})

export default router;