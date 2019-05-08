var db = require("../models");
var passport = require("passport");
var authenticated = require("../config/isAuthenticate");

module.exports = function(app) {

    app.get("/login", authenticated, (req, res) => {
        res.render("login", { title: "login" })
    });

    app.post("/login", passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: 'Invalid username or password.'
        }),
        (req, res) => {
            res.redirect("/welcome/" + req.user)
        });


    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};