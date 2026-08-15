import { Request, Response } from "express";
import mongoose from "mongoose";
import Task from "../models/Task.js";
import Column from "../models/Column.js";

interface TaskParams {
  id: string;
}

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, priority, columnId } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      res.status(400).json({
        message: "Task title is required",
      });
      return;
    }

    if (!columnId || !mongoose.Types.ObjectId.isValid(columnId)) {
      res.status(400).json({
        message: "Valid column ID is required",
      });
      return;
    }

    const column = await Column.findById(columnId);

    if (!column) {
      res.status(404).json({
        message: "Column not found",
      });
      return;
    }

    if (
      priority !== undefined &&
      !["Low", "Medium", "High"].includes(priority)
    ) {
      res.status(400).json({
        message: "Priority must be Low, Medium, or High",
      });
      return;
    }

    const task = await Task.create({
      title: title.trim(),
      description:
        typeof description === "string"
          ? description.trim()
          : "",
      priority: priority || "Medium",
      columnId,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

export const getTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { priority } = req.query;

    const filter: {
      priority?: "Low" | "Medium" | "High";
    } = {};

    if (priority !== undefined) {
      if (
        priority !== "Low" &&
        priority !== "Medium" &&
        priority !== "High"
      ) {
        res.status(400).json({
          message: "Invalid priority",
        });
        return;
      }

      filter.priority = priority;
    }

    const tasks = await Task.find(filter)
      .populate("columnId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

export const getTaskById = async (
  req: Request<TaskParams>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        message: "Invalid task ID",
      });
      return;
    }

    const task = await Task.findById(id).populate(
      "columnId",
      "name"
    );

    if (!task) {
      res.status(404).json({
        message: "Task not found",
      });
      return;
    }

    res.status(200).json({
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch task",
    });
  }
};

export const updateTask = async (
  req: Request<TaskParams>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, priority } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        message: "Invalid task ID",
      });
      return;
    }

    if (
      title !== undefined &&
      (typeof title !== "string" || !title.trim())
    ) {
      res.status(400).json({
        message: "Task title cannot be empty",
      });
      return;
    }

    if (
      priority !== undefined &&
      !["Low", "Medium", "High"].includes(priority)
    ) {
      res.status(400).json({
        message: "Priority must be Low, Medium, or High",
      });
      return;
    }

    const updateData: {
      title?: string;
      description?: string;
      priority?: "Low" | "Medium" | "High";
    } = {};

    if (title !== undefined) {
      updateData.title = title.trim();
    }

    if (description !== undefined) {
      updateData.description =
        typeof description === "string"
          ? description.trim()
          : "";
    }

    if (priority !== undefined) {
      updateData.priority = priority;
    }

    const task = await Task.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    ).populate("columnId", "name");

    if (!task) {
      res.status(404).json({
        message: "Task not found",
      });
      return;
    }

    res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update task",
    });
  }
};

export const deleteTask = async (
  req: Request<TaskParams>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        message: "Invalid task ID",
      });
      return;
    }

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      res.status(404).json({
        message: "Task not found",
      });
      return;
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete task",
    });
  }
};

export const moveTask = async (
  req: Request<TaskParams>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { columnId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        message: "Invalid task ID",
      });
      return;
    }

    if (!columnId || !mongoose.Types.ObjectId.isValid(columnId)) {
      res.status(400).json({
        message: "Valid column ID is required",
      });
      return;
    }

    const column = await Column.findById(columnId);

    if (!column) {
      res.status(404).json({
        message: "Destination column not found",
      });
      return;
    }

    const task = await Task.findByIdAndUpdate(
      id,
      {
        columnId,
      },
      {
        new: true,
        runValidators: true,
      }
    ).populate("columnId", "name");

    if (!task) {
      res.status(404).json({
        message: "Task not found",
      });
      return;
    }

    res.status(200).json({
      message: "Task moved successfully",
      task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to move task",
    });
  }
};