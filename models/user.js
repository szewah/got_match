"use strict";

var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: { type: DataTypes.STRING, validate: { notEmpty: true } },
        lastName: { type: DataTypes.STRING, validate: { notEmpty: true } },
        email: { type: DataTypes.STRING, validate: { notEmpty: true } },
        password: { type: DataTypes.STRING, allowNull: false }
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    //sequelize method
    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });


    return User;
}