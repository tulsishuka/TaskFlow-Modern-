import dotenv from "dotenv";
import mongoose from "mongoose";

import Board from "./models/Board.js";
import Column from "./models/Column.js";
import Task from "./models/Task.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("MongoDB connected");

    await Task.deleteMany({});
    await Column.deleteMany({});
    await Board.deleteMany({});

    console.log("Old data cleared");
    const board = await Board.create({
      name: "TaskFlow Board",
    });

    console.log("Board created:", board._id);
    const todo = await Column.create({
      name: "To Do",
      boardId: board._id,
      position: 1,
    });

    const inProgress = await Column.create({
      name: "In Progress",
      boardId: board._id,
      position: 2,
    });

    const done = await Column.create({
      name: "Done",
      boardId: board._id,
      position: 3,
    });

    console.log("Columns created");

    await Task.create([
      {
        title: "Design landing page",
        description: "Create the initial landing page",
        priority: "High",
        columnId: todo._id,
      },
      {
        title: "Build API",
        description: "Create TaskFlow backend APIs",
        priority: "Medium",
        columnId: inProgress._id,
      },
      {
        title: "Setup MongoDB",
        description: "Connect application with MongoDB",
        priority: "Low",
        columnId: done._id,
      },
    ]);

    console.log("Tasks created");

    console.log("\nSeed completed successfully!");
    console.log("BOARD ID:", board._id.toString());

    console.log("\nColumn IDs:");
    console.log("To Do:", todo._id.toString());
    console.log("In Progress:", inProgress._id.toString());
    console.log("Done:", done._id.toString());

    await mongoose.disconnect();

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);

    await mongoose.disconnect();

    process.exit(1);
  }
};

seedDatabase();