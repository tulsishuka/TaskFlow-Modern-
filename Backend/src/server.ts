import dotenv from "dotenv";
import connectDB from "./config/db";
import app from "../app.js";

dotenv.config();


const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(
      `TaskFlow server running on http://localhost:${PORT}`
    );
  });
};

startServer();