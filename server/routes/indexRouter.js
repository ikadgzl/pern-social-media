import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.json({ msg: 'from index' });
});

export default indexRouter;
