
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
const updateComment = async (req, res) => {

    const commentId = req.params.id;
    const { message, owner, postId} = req.body;
  
    const updatedComment = await CommentsModel.findById(commentId.trim());
  
    if (updatedComment !== -1) {
      updatedComment.message = message;
      updatedComment.owner = owner;
      updatedComment.postId = postId;
      try{
        updatedComment.save();
        res.status(201).send(updatedComment);
        } catch (error) {
          res.status(400).send(error.message);
        }
      } else{
        return res.status(404).json({ message: 'Comment not found' });
      }
  };  
  const getCommentByID = async (req, res) => {
    const commentId = req.params.id;
  
    try {
      const comment = await CommentModel.findById(commentId);
      if (comment) {
        res.send(comment);
      } else {
        res.status(404).send("comment not found");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  
  module.exports = {
    addNewComment,
    updateComment,
    getCommentByID
  };
  