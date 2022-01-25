import express from 'express';
import pool from '../db.js';
import { isAuth } from '../isAuth.js';

const indexRouter = express.Router();

indexRouter.get('/account', isAuth, (req, res) => {
  const user = {
    ...req.user,
    isLogged: true
  };

  res.json({ user });
});

indexRouter.post('/new_post', isAuth, async (req, res) => {
  console.log(req.body);

  // try {
  //   await pool.query('INSERT INTO posts (body, author_id) VALUES ($1, $2)', [
  //     req.body.post,
  //     req.user.id
  //   ]);

  //   res
  //     .status(200)
  //     .json({ msg: 'Post successfully added', post: req.body.post });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ error });
  // }
});

export default indexRouter;
