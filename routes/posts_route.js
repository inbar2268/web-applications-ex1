const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");

router.post("/", postsController.addNewPost);
router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPostById);
router.put("/:id", postsController.updatePost);
router.get("/byOwner/:owner", postsController.getPostsByOwner);

module.exports = router;