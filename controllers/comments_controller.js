
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
      const comment = await CommentsModel.findById(commentId);
      if (comment) {
        res.send(comment);
      } else {
        res.status(404).send("comment not found");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  const deleteComment = async (req, res) => {
    const commentId = req.params.id;
  
    try {
      const result = await CommentsModel.findByIdAndDelete(commentId.trim());
      if (!result) {
        return res.status(404).send('comment not found');
      }
      return res.status(200).send('comment deleted successfully');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getCommentsByPostID = async (req, res) => {
    const postId= req.params.id;
  
    try {
      const comments = await CommentsModel.find({ postId: postId });
  
      if (comments.length > 0) {
        return res.status(200).send(comments);
      } else {
        return res.status(404).send("No comments found to the post");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

  module.exports = {
    addNewComment,
    updateComment,
    getCommentByID,
    deleteComment,
    getCommentsByPostID
  };
  