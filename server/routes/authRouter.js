import { Router } from 'express';
import passport from 'passport';

const authRouter = Router();

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
    console.log(req.session);
    res.redirect(process.env.CLIENT_URL);
  }
);

export default authRouter;
