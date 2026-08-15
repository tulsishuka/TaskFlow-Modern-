import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  columnId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    columnId: {
      type: Schema.Types.ObjectId,
      ref: "Column",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITask>("Task", taskSchema);