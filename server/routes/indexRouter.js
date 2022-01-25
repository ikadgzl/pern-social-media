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

export default indexRouter;
