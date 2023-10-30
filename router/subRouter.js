import express from "express";
import { subController } from "../controller/indexController.js";

const router = express.Router();

router.post("/semester/create", subController.createNewSemester);

router.post("/userRole/create", subController.createNewUserRole);

export default router;
