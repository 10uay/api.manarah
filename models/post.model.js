import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content_in_EN: {
      type: String,
      required: true,
    },
    content_in_AR: {
      type: String,
      required: true,
    },
    content_in_DE: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      default:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    views: {
      type: Number,
      required: true,
      default: 289
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
