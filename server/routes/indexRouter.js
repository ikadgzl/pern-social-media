import { Router } from 'express';
import pool from '../db.js';
import { isAuth } from '../isAuth.js';

const indexRouter = Router();

indexRouter.get('/account', isAuth, (req, res) => {
  const user = {
    ...req.user,
    isLogged: true
  };

  res.status(200).json({ user });
});

indexRouter.post('/new_post', isAuth, async (req, res) => {
  try {
    await pool.query('INSERT INTO posts (body, author_id) VALUES ($1, $2)', [
      req.body.post,
      req.user.id
    ]);

    res
      .status(200)
      .json({ msg: 'Post added successfully', post: req.body.post });
  } catch (error) {
    res.status(500).json({ error });

    console.log(error);
  }
});

indexRouter.get('/feed', isAuth, async (req, res) => {
  try {
    const posts = await pool.query(
      'SELECT u.username, u.img, p.body FROM users u INNER JOIN posts p ON u.id = p.author_id ORDER BY p.id DESC LIMIT 5 OFFSET $1',
      [req.query.cursor]
    );

    res
      .status(200)
      .json({ cursor: req.query.cursor * 1 + 5, posts: posts.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

indexRouter.get('/my_posts', isAuth, async (req, res) => {
  try {
    const posts = await pool.query(
      'SELECT u.username, u.img, p.body FROM users u INNER JOIN posts p ON u.id = p.author_id WHERE p.author_id = $1 ORDER BY p.id DESC LIMIT 5 OFFSET $2',
      [req.user.id, req.query.cursor]
    );

    res
      .status(200)
      .json({ cursor: req.query.cursor * 1 + 5, posts: posts.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default indexRouter;
