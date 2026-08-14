import { Router } from "express";

import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  moveTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.patch("/:id/move", moveTask);

router.delete("/:id", deleteTask);

export default router;