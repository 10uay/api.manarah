import express from "express";
import { getPortfolio } from "../controllers/portfolio.controller.js";
import { uploadPortfolio } from "../controllers/portfolio.controller.js";

const router = express.Router();

router.get("/get-data", getPortfolio);
router.post("/upload-data", uploadPortfolio);


export default router;
