import { Schema, model } from "mongoose";

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    serviceRequested: {
      type: String,
      required: true,
      enum: ["web-development", "wordpress-development", "software-testing", "seo", "website-maintenance"],
    },
    budgetRange: {
      type: String,
      required: true,
      enum: ["$1k-$3k", "$3k-$5k", "$5k-$10k", "$10k+"],
    },
    projectDetails: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "reviewing", "proposal-sent", "won", "lost"],
      default: "new",
    },
    internalNotes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const Lead = model("Lead", LeadSchema);
