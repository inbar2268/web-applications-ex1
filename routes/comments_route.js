const express = require("express");
const router = express.Router();
const CommentsController = require("../controllers/comments_controller");

router.post("/", CommentsController.addNewComment);
router.put("/:id", CommentsController.updateComment);
router.get("/:id", CommentsController.getCommentByID);
router.delete("/:id", CommentsController.deleteComment);

module.exports = router;