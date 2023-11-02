import express from "express";
import { subjectController } from "../controller/indexController.js";

const router = express.Router();

router.get("/all", subjectController.getAllSubjects);

router.post("/create", subjectController.createNewSubject);

router.get("/:subject_id", subjectController.getSubjectbyId);

router.patch("/update", subjectController.updateSubject);

router.patch("/active", subjectController.changeActiveSubject);

router.delete("/delete/:subject_id", subjectController.softDeleteSubject);

router.get("/", subjectController.getAllSubject);

export default router;
