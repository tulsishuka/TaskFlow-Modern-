import mongoose, { Document, Schema } from "mongoose";

export interface IBoard extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const boardSchema = new Schema<IBoard>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBoard>("Board", boardSchema);