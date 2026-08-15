import mongoose, { Document, Schema } from "mongoose";

export interface IColumn extends Document {
  name: string;
  boardId: mongoose.Types.ObjectId;
  position: number;
  createdAt: Date;
  updatedAt: Date;
}

const columnSchema = new Schema<IColumn>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },

    position: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Column = mongoose.model<IColumn>("Column", columnSchema);

export default Column;