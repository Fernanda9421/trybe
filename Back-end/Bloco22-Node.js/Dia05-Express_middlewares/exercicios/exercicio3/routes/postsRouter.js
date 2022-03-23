const express = require('express');
const router = express.Router();

const posts = require('../datas/posts');
const { validId, findPostById, allPosts } = require('../middlewares/postsMiddleware');

router.get(
  '/:id',
  validId,
  findPostById,
);

router.get(
  '/',
  allPosts,
)

module.exports = router;
