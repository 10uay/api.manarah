import Service from "../models/service.model.js";

export const getServices = async (req, res, next) => {
  try {
    // /api/post/get-posts?userId=${currentUser._id}&startIndex=${startIndex}
    //      the query it's from MongoDB and the startIndex is from query
    //      if we want to use params instand of query we just need to write the link like this:
    //      api/post/get-posts/${currentUser._id}/${startIndex}
    //      req.params.startIndex becausse in Route we write /get-posts/:currentUserId/:startIndex

    const services = await Service.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.classification && {
        classification: req.query.classification,
      }),
    });

    res.status(200).json({
      services,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadService = async (req, res) => {
  try {
    // console.log(req.body);
    await Service.create({
      ...req.body,
    });
    res.status(201).json("new Service saved");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
