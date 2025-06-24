// backend/models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    liveUrl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
