import { Schema, model } from "mongoose";

const SubscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: "",
    },
    tokenExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Subscriber = model("Subscriber", SubscriberSchema);
