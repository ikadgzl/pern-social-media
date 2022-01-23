import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';

const app = express();

// middlewares
dotenv.config();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL
  })
);

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === 'production' ? 'true' : 'auto',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    },
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(4000, () => {
  console.log('Server is nup and running on 4000');
});
