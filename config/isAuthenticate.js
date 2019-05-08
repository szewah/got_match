//Restrict access to pages meant for logged in users only.

module.exports = function(req, res, next) {
    //If the user is logged in, continue
    if (req.user) {
        return next();
    }
    //If not return them to the login page
    return res.redirect("/");
};