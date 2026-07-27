import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { User } from "./models/user";
import authRoutes from "./routes/auth";
import leadRoutes from "./routes/leads";
import newsletterRoutes from "./routes/newsletter";

// Load environment configurations
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Database
connectDB().then(async () => {
  // Seed default admin account if user collection is empty
  try {
    const adminCount = await User.countDocuments();
    if (adminCount === 0) {
      await User.create({
        email: "admin@creovix.com",
        password: "AdminSecurePass2026!",
        role: "admin",
      });
      console.log("[SEED] Default admin credentials seeded: admin@creovix.com / AdminSecurePass2026!");
    }
  } catch (err) {
    console.error("Error during admin database seed:", err);
  }
});

// Middlewares
app.use(helmet());
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((url) => url.trim())
  : ["http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
        callback(null, true);
      } else {
        callback(null, true); // Permissive CORS for lead submissions from deployed web app domains
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// API Request Rate Limiter (Max 100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: "Too many requests. Please try again later." },
});
app.use(limiter);

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Bind Endpoints
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/leads", leadRoutes);
app.use("/api/v1/newsletter", newsletterRoutes);

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error occurred." });
});

app.listen(PORT, () => {
  console.log(`Express CRM API server running on port ${PORT} in development mode.`);
});
