import { Request, Response, NextFunction } from "express";
import Task, {
  TaskColumn,
  TaskPriority,
} from "../models/Task.js";


// ========================================
// GET ALL TASKS
// GET /api/tasks
// ========================================

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { priority, search, column } = req.query;

    const filter: Record<string, unknown> = {};

    // Filter by priority
    if (
      priority &&
      ["Low", "Medium", "High"].includes(priority as string)
    ) {
      filter.priority = priority;
    }

    // Filter by column
    if (
      column &&
      ["To Do", "In Progress", "Done"].includes(column as string)
    ) {
      filter.column = column;
    }

    // Search by title
    if (search && typeof search === "string") {
      filter.title = {
        $regex: search.trim(),
        $options: "i",
      };
    }

    const tasks = await Task.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};


// ========================================
// GET SINGLE TASK
// GET /api/tasks/:id
// ========================================

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    next(error);
  }
};


// ========================================
// CREATE TASK
// POST /api/tasks
// ========================================

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      description,
      priority,
      column,
    } = req.body;

    // Backend validation
    if (!title || typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Task title is required",
      });
    }

    // Validate priority
    if (
      priority &&
      !["Low", "Medium", "High"].includes(priority)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid priority",
      });
    }

    // Validate column
    if (
      column &&
      !["To Do", "In Progress", "Done"].includes(column)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid column",
      });
    }

    const task = await Task.create({
      title: title.trim(),
      description: description?.trim() || "",
      priority: priority || "Medium",
      column: column || "To Do",
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};


// ========================================
// UPDATE TASK
// PUT /api/tasks/:id
// ========================================

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      description,
      priority,
    } = req.body;

    // Validate title if provided
    if (
      title !== undefined &&
      (!title || typeof title !== "string" || !title.trim())
    ) {
      return res.status(400).json({
        success: false,
        message: "Task title cannot be empty",
      });
    }

    // Validate priority
    if (
      priority !== undefined &&
      !["Low", "Medium", "High"].includes(priority)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid priority",
      });
    }

    const updateData: Record<string, unknown> = {};

    if (title !== undefined) {
      updateData.title = title.trim();
    }

    if (description !== undefined) {
      updateData.description = description.trim();
    }

    if (priority !== undefined) {
      updateData.priority = priority;
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};


// ========================================
// MOVE TASK
// PATCH /api/tasks/:id/move
// ========================================

export const moveTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { column } = req.body;

    const validColumns: TaskColumn[] = [
      "To Do",
      "In Progress",
      "Done",
    ];

    if (!validColumns.includes(column)) {
      return res.status(400).json({
        success: false,
        message: "Invalid column",
      });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { column },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Task moved to ${column}`,
      task,
    });
  } catch (error) {
    next(error);
  }
};


export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};