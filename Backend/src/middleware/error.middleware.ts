import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again.",
  });
};

export default errorMiddleware;