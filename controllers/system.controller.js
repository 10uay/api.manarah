import System from "../models/system.model.js";

export const getSystems = async (req, res, next) => {
  try {
    // /api/post/get-posts?userId=${currentUser._id}&startIndex=${startIndex}
    //      the query it's from MongoDB and the startIndex is from query
    //      if we want to use params instand of query we just need to write the link like this:
    //      api/post/get-posts/${currentUser._id}/${startIndex}
    //      req.params.startIndex becausse in Route we write /get-posts/:currentUserId/:startIndex

    const systems = await System.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.classification && {
        classification: req.query.classification,
      }),
    });

    res.status(200).json({
      systems,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadSystem = async (req, res) => {
  try {
    await System.create({
      ...req.body,
    });
    res.status(201).json("new System saved");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
