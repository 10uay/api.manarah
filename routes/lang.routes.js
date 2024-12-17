import express from "express";
import { getLang } from "../controllers/lang.controller.js";
import { uploadLang } from "../controllers/lang.controller.js";


const router = express.Router();

router.get("/:lng/translation.json", getLang);
router.post("/:lng/translation.json", uploadLang);

export default router;
