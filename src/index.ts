import express from "express";
import { studentController } from "./controllers/studentController";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { RequestHandler } from "express";
import { userRouter } from "./routes/userRoutes";
import { verifyToken } from "./middleware/auth";
import { Request } from "express";
// import use
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
// app.use(function (req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "*");
//   res.set('Access-Control-Allow-Origin', 'https://northfield-frontend.vercel.app');
// })
// app.options("", cors())
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`db connected successfully\nserver up and running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/user", userRouter);


app.post('/sendresult', verifyToken, studentController);
