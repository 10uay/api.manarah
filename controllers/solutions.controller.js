import Solution from "../models/solution.model.js";

export const getSolutions = async (req, res, next) => {
  try {
    // /api/post/get-posts?userId=${currentUser._id}&startIndex=${startIndex}
    //      the query it's from MongoDB and the startIndex is from query
    //      if we want to use params instand of query we just need to write the link like this:
    //      api/post/get-posts/${currentUser._id}/${startIndex}
    //      req.params.startIndex becausse in Route we write /get-posts/:currentUserId/:startIndex

    const solutions = await Solution.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.classification && {
        classification: req.query.classification,
      }),
    });

    res.status(200).json({
      solutions,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadSolution = async (req, res) => {
  try {
    await Solution.create({
      ...req.body,
    });
    res.status(201).json("new Solution saved");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};