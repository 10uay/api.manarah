import express from "express";
import {
  getServices,
  uploadService,
} from "../controllers/services.controller.js";
const router = express.Router();

router.get("/get-data", getServices);
router.post("/upload-data", uploadService);

export default router;
