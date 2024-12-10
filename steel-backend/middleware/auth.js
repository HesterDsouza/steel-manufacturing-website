import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({ message: "Unauthorized", error: "No token" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.adminId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: "Unauthorized", error })
    }
}

export default auth;