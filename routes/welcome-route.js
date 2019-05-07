var db = require("../models");

module.exports = function(app) {

    app.get("/welcome/:name", async(req, res) => {
        res.render("welcome", { title: "Welcome", name: req.params.name })
    });

};