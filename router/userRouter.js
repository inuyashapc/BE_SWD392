import express from "express";
import { userController } from "../controller/indexController.js";


const router = express.Router();

router.post("/register", userController.userRegister);

export default router;
