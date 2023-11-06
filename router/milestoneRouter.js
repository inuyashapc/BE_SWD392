import express from "express";
import { milestoneController } from "../controller/indexController.js";

const router = express.Router();

router.get("/", milestoneController.getAllMilestone);
router.get("/class/:id", milestoneController.getAllMilestoneByProject);
router.get("/:id", milestoneController.getDetailMilestone);
router.post("/create", milestoneController.createMilestone);
router.put("/:id", milestoneController.updateMilestone);
router.delete("/:id", milestoneController.deletedMilestone);

export default router;
