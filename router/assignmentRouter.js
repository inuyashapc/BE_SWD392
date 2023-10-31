import express from "express";
import { assignmentController } from "../controller/indexController.js";


const router = express.Router();

router.post("/create", assignmentController.createNewAssignment);

export default router;
