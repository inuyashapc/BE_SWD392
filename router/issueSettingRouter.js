import express from "express";
import { issueSettingController } from "../controller/indexController.js";

const router = express.Router();

router.post("/create", issueSettingController.createNewIssueSetting);
router.post("/createStatusType", issueSettingController.addNewTypeAndStatusBySettingId);

router.get('/getTypeAndStatus/:id', issueSettingController.getAllTypeAndStatusBySettingId);
router.get('/getAll', issueSettingController.getAllIssueSettings);
router.get('/get/:id', issueSettingController.getIssueSettingById);

router.put('/update/:id', issueSettingController.updateIssueSetting);
router.put('/changeStatus/:id', issueSettingController.changeStatusIssueSetting);

router.delete('/deleteTypeAndStatus',issueSettingController.deleteTypeAndStatusBySettingId);

export default router;
