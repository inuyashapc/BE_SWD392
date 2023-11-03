import * as express from "express";
import { body } from "express-validator";
import { userController } from "../controller/indexController.js";


const userRouter = express.Router();

userRouter.post(
  "/register",
  body("full_name").notEmpty().withMessage("Họ Tên không được trống"),
  body("email")
    .notEmpty()
    .withMessage("Email không được trống")
    .isString()
    .trim()
    .withMessage("Email phải đúng định dạng"),
  body("password")
    .notEmpty()
    .withMessage("Mật khẩu không được trống")
    .isLength({ min: 8 })
    .withMessage("Mật khẩu phải lớn hơn 8 kí tự"),
  userController.register
);

userRouter.get("/teachers", userController.getAllTeacher);
userRouter.get("/", userController.getAllUser);
userRouter.get("/managers", userController.getAllManager);
userRouter.post(
  "/login",
  body("email")
    .notEmpty()
    .withMessage("Email không được trống")
    .isString()
    .trim()
    .withMessage("Email phải đúng định dạng"),
  body("password")
    .notEmpty()
    .withMessage("Mật khẩu không được trống")
    .isLength({ min: 8 })
    .withMessage("Mật khẩu phải lớn hơn 8 kí tự"),
  userController.login
);

export default userRouter;
