const express = require("express");
const router = express.Router();
const CommentsController = require("../controllers/comments_controller");

router.post("/", CommentsController.addNewComment);
module.exports = router;