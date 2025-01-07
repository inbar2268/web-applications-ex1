const PostModel = require("../models/posts_model");

const addNewPost = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await PostModel.create(postBody);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllPosts = async (req, res) => {
  try {
      const posts = await PostModel.find();
      res.send(posts); 
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await PostModel.findById(postId);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updatePost = async (req, res) => {

  const postId = req.params.id;
  const { title, content, owner} = req.body;

  const updatedPost = await PostModel.findById(postId.trim());

  if (updatedPost !== -1) {
    updatedPost.title = title;
    updatedPost.content = content;
    updatedPost.owner = owner;
    try{
      updatedPost.save();
      res.status(201).send(updatedPost);
      } catch (error) {
        res.status(400).send(error.message);
      }
    } else{
      return res.status(404).json({ message: 'Post not found' });
    }
};



module.exports = {
  addNewPost,
  getAllPosts,
  getPostById,
  updatePost
};