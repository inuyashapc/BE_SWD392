import express from "express";
import { classController } from "../controller/indexController.js";

const router = express.Router();

router.get("/", classController.getAllClass);
router.get("/:id", classController.getClassDetail);
router.put("/changeStatus/:id", classController.changeStatus);
router.put("/:id", classController.updateClass);
router.post("/create", classController.createNewClass);

export default router;
