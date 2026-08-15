import { Request, Response } from "express";
import Board from "../models/Board.js";
import Column from "../models/Column.js";

export const createBoard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      res.status(400).json({
        message: "Board name is required",
      });
      return;
    }

    const board = await Board.create({
      name: name.trim(),
    });

    res.status(201).json({
      message: "Board created successfully",
      board,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create board",
    });
  }
};

export const getBoards = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const boards = await Board.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: boards.length,
      boards,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch boards",
    });
  }
};

export const getBoardById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const board = await Board.findById(id);

    if (!board) {
      res.status(404).json({
        message: "Board not found",
      });
      return;
    }

    const columns = await Column.find({
      boardId: board._id,
    }).sort({ position: 1 });

    res.status(200).json({
      board,
      columns,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch board",
    });
  }
};