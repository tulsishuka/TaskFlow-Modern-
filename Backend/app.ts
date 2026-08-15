import express from "express";
import cors from "cors";

import boardRoutes from "./routes/boardRoutes.js";
import columnRoutes from "./routes/columnRoutes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "TaskFlow API is running",
  });
});

app.use("/api/tasks", taskRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/columns", columnRoutes);

app.use((_req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

export default app;