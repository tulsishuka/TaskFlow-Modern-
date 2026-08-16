import { Router } from "express";
import { createTask, deleteTask, getTaskById, getTasks, moveTask, updateTask } from "../controllers/taskController.js";


const router = Router();

router.post("/", createTask);

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

router.patch("/:id/move", moveTask);

export default router;