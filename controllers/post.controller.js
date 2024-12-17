import Post from "../models/post.model.js";

export const handleError = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};


export const Create = async (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.content_in_EN ||
    !req.body.content_in_AR||
    !req.body.content_in_DE
  ) {
    return next(handleError(400, "Please provide all required fields"));
  }
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  try {
    const newPost = await Post.create({
      ...req.body,
      slug,
    });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    // /api/post/get-posts?userId=${currentUser._id}&startIndex=${startIndex}
    //      the query it's from MongoDB and the startIndex is from query
    //      if we want to use params instand of query we just need to write the link like this:
    //      api/post/get-posts/${currentUser._id}/${startIndex}
    //      req.params.startIndex becausse in Route we write /get-posts/:currentUserId/:startIndex

    const posts = await Post.find({}); // Just an empty query object

    res.status(200).json({
      posts,
    });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json("The post has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  try {
    const newPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: {
          ...req.body,
          slug,
        },
      },
      { new: true }
    );
    res.status(200).json(newPost);
  } catch (error) {
    next(error);
  }
};
