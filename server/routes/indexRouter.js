import express from 'express';
import { isAuth } from '../isAuth.js';

const indexRouter = express.Router();

indexRouter.get('/account', isAuth, (req, res) => {
  const user = {
    ...req.user,
    isLogged: true
  };

  res.json({ user });
});

export default indexRouter;
