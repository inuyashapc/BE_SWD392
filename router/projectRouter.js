import express from "express";
import { projectController } from "../controller/indexController.js";

const router = express.Router();

router.get('/getAll', projectController.getAllProject);

export default router;
