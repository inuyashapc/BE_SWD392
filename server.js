import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import ConnectDB from "./util/DBContext.js";
import { subRouter, userRouter,classRouter ,subjectRouter ,assignmentRouter} from "./router/indexRouter.js";
const app = express();

// const corsOptions = {
//   origin: process.env.FRONT_END_ORIGIN_URL,
//   credentials: true,
// };
app.use(cors());
app.use(express.json());

// ae code new route o day
app.use("/users", userRouter);
app.use("/classes", classRouter);
app.use("/subjects", subjectRouter);
app.use("/assignments", assignmentRouter);
////////////////////////////////
app.use("/", subRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  ConnectDB();
  console.log(`Server is running on port ${port}`);
});
