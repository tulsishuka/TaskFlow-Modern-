import express from "express";
import cors from "cors";
import taskRoutes from "./src/routes/task.routes";
import notFoundMiddleware from "./src/middleware/notFound.middleware";
import errorMiddleware from "./src/middleware/error.middleware";



const app = express();


// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());


// Health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "TaskFlow API is running",
  });
});


// Routes
app.use("/api/tasks", taskRoutes);


// 404
app.use(notFoundMiddleware);


// Error handler
app.use(errorMiddleware);

export default app;