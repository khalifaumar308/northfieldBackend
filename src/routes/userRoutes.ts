import { handleLogin, handleNewUser, handleRefreshToken } from "../controllers/schoolController";
import { getData, addData } from "../controllers/dataController";
import express from "express";

export const userRouter = express.Router();

userRouter
  .post("/login", handleLogin)
  .post("/register", handleNewUser)
  .post("/refresh", handleRefreshToken)
  .post("/data", addData)
  .get("/data", getData)

// module.exports = userRouter;
