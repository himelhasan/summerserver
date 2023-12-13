import { Request, Response } from "express";
import { getAllUsersFromDB } from "./user.service";

export const allUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
};
