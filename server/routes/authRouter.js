import { Router } from 'express';
import passport from 'passport';

const authRouter = Router();

authRouter.get('/', (req, res) => {
  res.json({ msg: 'from auth' });
});

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: 'profile'
  })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: true }),
  (req, res) => {
    res.json({ session: req.session, user: req.user });
  }
);

export default authRouter;
