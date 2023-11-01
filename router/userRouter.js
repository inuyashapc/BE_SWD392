import express from "express";
import { userController } from "../controller/indexController.js";

const router = express.Router();

router.post("/register", userController.userRegister);

router.get("/teachers", userController.getAllTeacher);
router.get("/", userController.getAllUser);

export default router;
