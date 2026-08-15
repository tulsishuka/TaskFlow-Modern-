import { Request, Response } from "express";
import Column from "../models/Column.js";
import Board from "../models/Board.js";
import Task from "../models/Task.js";

export const createColumn = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, boardId, position } = req.body;

    if (!name || !name.trim()) {
      res.status(400).json({
        message: "Column name is required",
      });
      return;
    }

    if (!boardId) {
      res.status(400).json({
        message: "Board ID is required",
      });
      return;
    }

    const board = await Board.findById(boardId);

    if (!board) {
      res.status(404).json({
        message: "Board not found",
      });
      return;
    }

    const column = await Column.create({
      name: name.trim(),
      boardId,
      position: position ?? 0,
    });

    res.status(201).json({
      message: "Column created successfully",
      column,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create column",
    });
  }
};

export const getColumns = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { boardId } = req.params;

    const columns = await Column.find({
      boardId,
    }).sort({ position: 1 });

    const columnsWithTasks = await Promise.all(
      columns.map(async (column) => {
        const tasks = await Task.find({
          columnId: column._id,
        }).sort({ createdAt: -1 });

        return {
          ...column.toObject(),
          tasks,
        };
      })
    );

    res.status(200).json({
      columns: columnsWithTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch columns",
    });
  }
};