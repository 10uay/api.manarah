import express from "express";
import {
  Create,
  getPosts,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", Create);
router.get("/get-posts", getPosts);
router.delete("/delete-post/:postId", deletePost);
router.put("/update-post/:postId", updatePost);

export default router;
