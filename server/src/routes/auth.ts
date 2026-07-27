import { Router, Request, Response } from "express";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ success: false, message: "Please provide email and password." });
    return;
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    // For ease of development/testing, also allow a fallback admin credentials check if database user isn't seeded yet
    const isFallbackAdmin = email === "admin@creovix.com" && password === "AdminSecurePass2026!";

    if (!user && !isFallbackAdmin) {
      res.status(401).json({ success: false, message: "Invalid credentials." });
      return;
    }

    if (user) {
      const isMatch = await (user as any).comparePassword(password);
      if (!isMatch) {
        res.status(401).json({ success: false, message: "Invalid credentials." });
        return;
      }
    }

    const userId = user ? user._id.toString() : "fallback-admin-id";
    const jwtSecret = process.env.JWT_SECRET || "supersecretjwtkey12345";
    const token = jwt.sign({ id: userId, role: "admin" }, jwtSecret, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
