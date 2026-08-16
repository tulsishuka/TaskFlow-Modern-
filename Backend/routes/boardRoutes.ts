import { Router } from "express";
import { createBoard, getBoardById, getBoards } from "../controllers/board.controller.js";

const router = Router();
router.post("/", createBoard);
router.get("/", getBoards);
router.get("/:id", getBoardById);

export default router;