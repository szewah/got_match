var db = require("../models");

module.exports = function(app) {

    app.get("/login", async(req, res) => {
        res.render("login", { title: "login" })
    });

};