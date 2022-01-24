import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import pool from './db.js';

import dotenv from 'dotenv';
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: process.env.OAUTH_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      const account = profile._json;

      try {
        const currentUserQuery = await pool.query(
          'SELECT * FROM users WHERE google_id=$1',
          [account.sub]
        );

        let user = {};
        if (currentUserQuery.rows.length === 0) {
          await pool.query(
            'INSERT INTO users (username, img, google_id) VALUES ($1, $2, $3)',
            [account.name, account.picture, account.sub]
          );

          const id = await pool.query(
            'SELECT id FROM users WHERE google_id=$1',
            [account.sub]
          );

          user = {
            id,
            username: account.name,
            img: account.picture
          };
        } else {
          user = {
            id: currentUserQuery.rows[0].id,
            username: currentUserQuery.rows[0].username,
            img: currentUserQuery.rows[0].img
          };
        }

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
