var db = require("../models");

module.exports = function(app) {

    app.get("/home", async(req, res) => {
        res.render("home", { title: "home" })
    });

};