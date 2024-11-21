const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");

router.post("/", postsController.addNewPost);
router.get("/", postsController.getAllPosts);

module.exports = router;