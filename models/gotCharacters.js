"use strict";

module.exports = function(sequelize, DataTypes) {
    var GotCharacters = sequelize.define("GotCharacters", {
        firstName: { type: DataTypes.STRING, validate: { notEmpty: true } },
        lastName: { type: DataTypes.STRING, validate: { notEmpty: true } },
        hairColor: { type: DataTypes.STRING, validate: { notEmpty: true } },
        eyeColor: { type: DataTypes.STRING, validate: { notEmpty: true } },
        height: { type: DataTypes.DECIMAL(10, 2), validate: { isDecimal: true } },
        title: { type: DataTypes.STRING, validate: { notEmpty: true } },
        origin: { type: DataTypes.STRING, validate: { notEmpty: true } },
        description: { type: DataTypes.TEXT, validate: { notEmpty: true } }

    }, { timestamps: false });
    return GotCharacters;
};