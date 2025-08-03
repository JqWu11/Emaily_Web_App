const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = require('../models/users');

const user = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await user.findOne({ googleID: profile.id })

            if (existingUser) {
                //already have a record with the profile id
                return done(null, existingUser);
            }
            else {
                const user = await new User({ googleID: profile.id }).save()
                done(null, user);
            }
        })
);

// function fetchAlbums(){
//     fetch()
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

// async function fetchAlbums(){
//     const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
//     const json = await res.json();
//     console.log(json);
// }
// fetchAlbums();