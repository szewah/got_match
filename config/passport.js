var passport = require("passport");
var localStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new localStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
        usernameField: "email"

    },
    function(email, password, done) {
        // When a user tries to sign in this code runs
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser) {
            // If there's no user email
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            } else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, dbUser);
        });
    }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, user);
});

module.exports = passport;