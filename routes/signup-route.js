//post to the database user details

var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

    app.get("/", async(req, res) => {
        res.render("signup", { title: "signup" })
    });

    //add a new user to the database;
    app.post("/signup", async(req, res) => {

        db.User.create({
            firstName: req.body.name,
            lastName: req.body.lastName,
            email: req.body.userEmail,
            password: req.body.userPassword
        }).then(function(results) {

            var name = results.firstName;
            res.redirect("/welcome/" + name);
        })
    });

};