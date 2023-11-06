import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./util/DBContext.js";

import {
  subRouter,
  userRouter,
  classRouter,
  subjectRouter,
  assignmentRouter,
  milestoneRouter,
  systemSettingRouter,
  issueRouter,
  issueSettingRouter,
  projectRouter,
} from "./router/indexRouter.js";
const app = express();
dotenv.config();
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
app.use("/issues", issueRouter);
app.use("/milestones", milestoneRouter);
app.use("/systemSetting", systemSettingRouter);
app.use("/issueSettings", issueSettingRouter)
app.use('/projects',projectRouter)
////////////////////////////////
app.use("/", subRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  ConnectDB();
  console.log(`Server is running on port ${port}`);
});
