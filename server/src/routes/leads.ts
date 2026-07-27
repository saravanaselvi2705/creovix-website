import { Router, Response } from "express";
import { Lead } from "../models/lead";
import { protectAdmin, AuthenticatedRequest } from "../middleware/auth";

const router = Router();

// @route   POST /api/v1/leads
// @desc    Register a new lead from scoping form
// @access  Public
router.post("/", async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { name, email, company, serviceRequested, budgetRange, projectDetails } = req.body;

  if (!name || !email || !serviceRequested || !budgetRange || !projectDetails) {
    res.status(400).json({ success: false, message: "Please fill all required fields." });
    return;
  }

  try {
    const newLead = await Lead.create({
      name,
      email,
      company,
      serviceRequested,
      budgetRange,
      projectDetails,
    });

    res.status(201).json({
      success: true,
      message: "Scoping request submitted successfully.",
      data: newLead,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/v1/leads
// @desc    Get all leads
// @access  Admin Protected
router.get("/", protectAdmin, async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: leads.length, data: leads });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   PATCH /api/v1/leads/:id
// @desc    Update a lead status
// @access  Admin Protected
router.patch("/:id", protectAdmin, async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { status, internalNotes } = req.body;

  try {
    let lead = await Lead.findById(req.params.id);

    if (!lead) {
      res.status(404).json({ success: false, message: "Lead not found." });
      return;
    }

    if (status) lead.status = status;
    if (internalNotes !== undefined) lead.internalNotes = internalNotes;

    await lead.save();

    res.status(200).json({
      success: true,
      message: "Lead updated successfully.",
      data: lead,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
