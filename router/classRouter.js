import express from "express";
import { classController } from "../controller/indexController.js";

const router = express.Router();

router.get("/", classController.getAllClass);
router.post("/create", classController.createNewClass);
export default router;
