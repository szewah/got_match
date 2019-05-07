var db = require("../models");

module.exports = function(app) {

    app.get("/character", async(req, res) => {
        res.render("character", { title: "character" })
    });

    app.post("/character", async(req, res) => {

        db.GotCharacters.findOne({
            where: {
                hairColor: req.body.userHairColor,
                eyeColor: req.body.userEyeColor,
                height: req.body.userHeight
            }
        }).then(function(results) {
            res.render("character", {
                firstName: results.firstName,
                lastName: results.lastName,
                title: results.title,
                origin: results.origin,
                description: results.description,
                alsoKnownText: "Also known as ",
                originText: "Origin: ",
                abilitiesText: "Known abilities: "
            });
        })
    })
};