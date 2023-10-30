import express from "express";
import { classController } from "../controller/indexController.js";


const router = express.Router();

router.post("/create", classController.createNewClass);

export default router;
