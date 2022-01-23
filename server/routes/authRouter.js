import express from 'express';

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.json({ msg: 'from auth' });
});

export default authRouter;
