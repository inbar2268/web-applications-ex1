const CommentsModel = require("../models/comments_model");

const addNewComment = async (req, res) => {
  const commentBody = req.body;
  try {
    const comment = await CommentsModel.create(commentBody);
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};




module.exports = {
  addNewComment
};