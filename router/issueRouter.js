import express from "express";
import {issueController} from "../controller/indexController.js"

const router = express.Router();

router.post("/create", issueController.createNewIssue);
router.get("/", issueController.getAllIssue);
router.get("/:id", issueController.getIssueById);
router.post("/:id/update", issueController.batchUpdate);

export default router;