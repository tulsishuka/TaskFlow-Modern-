import mongoose, { Document, Schema } from "mongoose";

export type TaskPriority = "Low" | "Medium" | "High";

export type TaskColumn = "To Do" | "In Progress" | "Done";

export interface ITask extends Document {
  title: string;
  description: string;
  priority: TaskPriority;
  column: TaskColumn;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      minlength: [1, "Task title cannot be empty"],
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    column: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITask>("Task", taskSchema);