import express from "express";
import { getSystems, uploadSystem } from "../controllers/system.controller.js";

const router = express.Router();

router.get("/get-data", getSystems);
router.post("/upload-data", uploadSystem);

export default router;
