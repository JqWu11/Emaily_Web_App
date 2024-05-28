const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('users');

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        user.findOne({googleID: profile.id})
        .then((existingUser) => {
            if(exisingUser){
                //already have a record with the profile id
            }
            else{
                new user ({googleID: profile.id}).save();

            }
        })
})
);