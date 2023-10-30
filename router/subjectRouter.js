import express from "express";
import { subjectController } from "../controller/indexController.js";


const router = express.Router();

router.post("/create", subjectController.createNewSubject);

export default router;
