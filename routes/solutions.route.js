import express from "express";
import {
  getSolutions,
  uploadSolution,
} from "../controllers/solutions.controller.js";


const router = express.Router();

router.get("/get-data", getSolutions);
router.post("/upload-data", uploadSolution);



export default router;