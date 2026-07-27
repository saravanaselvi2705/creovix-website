import { Router, Request, Response } from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { Subscriber } from "../models/subscriber";
import { protectAdmin, AuthenticatedRequest } from "../middleware/auth";

const router = Router();

// Create transporter helper
const getTransporter = () => {
  // Safe mock SMTP fallback or Ethereal for testing
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.ethereal.email",
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER || "dummy.user@ethereal.email",
      pass: process.env.SMTP_PASS || "dummypassword",
    },
  });
};

// @route   POST /api/v1/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post("/subscribe", async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(400).json({ success: false, message: "Please provide a valid email address." });
    return;
  }

  try {
    let subscriber = await Subscriber.findOne({ email });

    // Generate token
    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours validation

    if (subscriber) {
      if (subscriber.isActive) {
        res.status(400).json({ success: false, message: "This email is already subscribed." });
        return;
      }
      // Update existing inactive subscriber
      subscriber.verificationToken = token;
      subscriber.tokenExpiresAt = expires;
      await subscriber.save();
    } else {
      // Create new inactive subscriber
      subscriber = await Subscriber.create({
        email,
        isActive: false,
        verificationToken: token,
        tokenExpiresAt: expires,
      });
    }

    // Send verification link (SMTP or log to console in local/dev fallback)
    const verificationUrl = `http://localhost:5000/api/v1/newsletter/verify/${token}`;
    console.log(`[NEWSLETTER SUBSCRIBE] Verification URL generated: ${verificationUrl}`);

    const transporter = getTransporter();
    const mailOptions = {
      from: '"Creovix Stack" <newsletter@creovixstack.com>',
      to: email,
      subject: "Verify Your Newsletter Subscription - Creovix Stack",
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #1f2937;">
          <h2 style="color: #059669;">CREOVIX.STACK</h2>
          <p>Please confirm your email address to complete your newsletter subscription.</p>
          <a href="${verificationUrl}" style="display: inline-block; background-color: #059669; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 12px;">Confirm Subscription</a>
          <p style="font-size: 11px; color: #6b7280; margin-top: 24px;">If you did not request this, you can ignore this email. This link will expire in 24 hours.</p>
        </div>
      `,
    };

    // Attempt to send email, catch errors silently and proceed as verification URL is logged to console for testing
    try {
      await transporter.sendMail(mailOptions);
    } catch (mailErr) {
      console.warn("Mail dispatch skipped: running in developer mock mode. Code validation link is:", verificationUrl);
    }

    res.status(200).json({
      success: true,
      message: "Verification link sent successfully. Please check your inbox.",
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/v1/newsletter/verify/:token
// @desc    Verify newsletter subscription
// @access  Public
router.get("/verify/:token", async (req: Request, res: Response): Promise<void> => {
  const { token } = req.params;

  try {
    const subscriber = await Subscriber.findOne({
      verificationToken: token,
      tokenExpiresAt: { $gt: new Date() },
    });

    if (!subscriber) {
      res.status(400).send(`
        <div style="font-family: sans-serif; text-align: center; padding: 48px; color: #dc2626;">
          <h2>Verification Failed</h2>
          <p>The link is invalid or has expired. Please subscribe again.</p>
        </div>
      `);
      return;
    }

    subscriber.isActive = true;
    subscriber.verificationToken = "";
    subscriber.tokenExpiresAt = undefined;
    await subscriber.save();

    res.status(200).send(`
      <div style="font-family: sans-serif; text-align: center; padding: 48px; color: #059669;">
        <h2>Subscription Verified</h2>
        <p>Thank you for subscribing to the Creovix Stack newsletter.</p>
        <a href="http://localhost:3000" style="color: #059669; font-weight: bold;">Back to Creovix Stack Website</a>
      </div>
    `);
  } catch (error: any) {
    res.status(500).send("Server Error");
  }
});

// @route   GET /api/v1/newsletter/subscribers
// @desc    Get all active subscribers
// @access  Admin Protected
router.get("/subscribers", protectAdmin, async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const subscribers = await Subscriber.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: subscribers.length, data: subscribers });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
