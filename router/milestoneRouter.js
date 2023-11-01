import express from "express";
import { milestoneController } from "../controller/indexController.js";

const router = express.Router();

router.get("/", milestoneController.getAllMilestone);
router.get("/", milestoneController.getAllMilestone);

export default router;
