import { Router } from "express";
import { allUsers } from "./user.controller";

const userRouter = Router();

userRouter.get("/", allUsers);

export default userRouter;
