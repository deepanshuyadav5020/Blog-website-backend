const express = require('express');
const router = express.Router();

const {createComment} =require('../controllers/CommentController');
const {createPost, getAllPosts} = require("../controllers/PostController");

router.post('/comments/create',createComment);
router.post("/posts/create", createPost);

module.exports = router;