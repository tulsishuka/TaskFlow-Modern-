import { Router } from "express";

import {
  createColumn,
  getColumns,
} from "../controllers/columnController.js";

const router = Router();
router.post("/", createColumn);
router.get("/board/:boardId", getColumns);

export default router;