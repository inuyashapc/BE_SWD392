import express from "express";
import { subjectController } from "../controller/indexController.js";

const router = express.Router();

router.post("/create", subjectController.createNewSubject);
router.get("/:subject_id", subjectController.getSubjectbyId);

router.get("/", subjectController.getAllSubject);

export default router;
