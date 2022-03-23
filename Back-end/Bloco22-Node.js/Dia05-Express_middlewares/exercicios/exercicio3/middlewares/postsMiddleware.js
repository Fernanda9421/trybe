const posts = require('../datas/posts');

const validId = (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: 'id not found' });

  next();
}

const findPostById = (req, res) => {
  const { id } = req.params;

  const findId = posts.find((post) => post.id === parseInt(id, 10));
  if (!findId) res.status(400).jsno({ message: 'post not found' });

  res.status(200).json(findId);
};

const allPosts = (req, res) => {
  if (posts.length === 0) return res.status(200).json({ posts: [] });
  res.status(200).json(posts);
};

module.exports = { validId, findPostById, allPosts };
