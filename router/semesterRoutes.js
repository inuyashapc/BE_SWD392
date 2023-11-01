import express from "express";
import { semesterController } from "../controller/indexController.js";

const router = express.Router();

router.get("/", semesterController.getAllSemester);

export default router;
