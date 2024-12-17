import express from "express";
import { uploadImg } from "../controllers/image.controller.js";
// import { uploadImgs } from "../controllers/image.controller.js";
import multer from "multer";
import path from "path";
import { verifyDbx } from "../utils/verifyToken.js";

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        path.extname(file.originalname || file.name)
    );
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/upload-img", upload.single("image"), uploadImg);
// router.post("/upload-imgs", upload.array("images"), uploadImgs);

export default router;
