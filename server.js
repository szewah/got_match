var express = require("express");
var session = require("express-session")
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;

var db = require("./models");

//Creating express app
var app = express();
// Static directory
app.use(express.static("public"));
// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Sessions
app.use(session({ secret: "keyboard cat", reserve: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Handlebars view engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
require("./routes/welcome-route")(app);
require("./routes/character-route")(app);
require("./routes/home-route")(app);
require("./routes/login-route")(app);
require("./routes/signup-route")(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function(err) {
        console.log("Magic is happening on http://localhost:" + PORT);
    });
});