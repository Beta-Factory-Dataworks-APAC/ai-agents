import mongoose from "mongoose";
import { mongoId, mongoString } from "../types/mongooseTypes";

const ChatSchema = new mongoose.Schema(
  {
    agentId: {
      type: mongoId,
      ref: "Agent",
      required: true,
    },
    userId: {
      type: mongoId,
      ref: "User",
      required: true,
    },
    user: {
      type: mongoString,
      required: false,
    },
    system: {
      type: mongoString,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model("Chat", ChatSchema);