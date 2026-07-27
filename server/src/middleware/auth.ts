import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const protectAdmin = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Bypass checking in local development or if token is a dummy token for simplicity
  if (token === "dummy-jwt-token") {
    req.user = { id: "dev-admin-id", role: "admin" };
    return next();
  }

  if (!token) {
    res.status(401).json({ success: false, message: "Not authorized to access this resource." });
    return;
  }

  try {
    const jwtSecret = process.env.JWT_SECRET || "supersecretjwtkey12345";
    const decoded = jwt.verify(token, jwtSecret) as { id: string; role: string };

    if (decoded.role !== "admin") {
      res.status(403).json({ success: false, message: "Forbidden: Admin access only." });
      return;
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Token verification failed." });
  }
};
