import Portfolio from "../models/portfolio.model.js";

export const getPortfolio = async (req, res, next) => {
  try {
    // /api/post/get-posts?userId=${currentUser._id}&startIndex=${startIndex}
    //      the query it's from MongoDB and the startIndex is from query
    //      if we want to use params instand of query we just need to write the link like this:
    //      api/post/get-posts/${currentUser._id}/${startIndex}
    //      req.params.startIndex becausse in Route we write /get-posts/:currentUserId/:startIndex

    const portfolios = await Portfolio.find({
      ...(req.query.classification && {
        classification: req.query.classification,
      }),
    });

    res.status(200).json({
      portfolios,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadPortfolio = async (req, res) => {
  try {
    await Portfolio.create({
      ...req.body,
    });
    res.status(201).json('new Portfolio saved');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
