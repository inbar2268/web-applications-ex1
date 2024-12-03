const express = require("express");
const router = express.Router();
const CommentsController = require("../controllers/comments_controller");

router.post("/", CommentsController.addNewComment);
router.put("/:id", CommentsController.updateComment);

module.exports = router;