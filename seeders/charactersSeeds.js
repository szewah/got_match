"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("GotCharacters", [{

                firstName: "Margaery",
                lastName: "Tyrell",
                hairColor: "Brown",
                eyeColor: "Brown",
                height: 5.5,
                title: "Queen of the Seven Kingdoms",
                origin: "The Reach",
                description: "Master at working people's emotions in her favor"
            },
            {
                firstName: "Theon",
                lastName: "Greyjoy",
                hairColor: "Brown",
                eyeColor: "Green",
                height: 5.7,
                title: "'Reek'",
                origin: "The Iron Islands",
                description: "Skilled archer"
            },
            {
                firstName: "Melisandre",
                lastName: "",
                hairColor: "Red",
                eyeColor: "Red",
                height: 5.6,
                title: "'The Red Woman'",
                origin: "Asshai",
                description: "Red Priestess of the Lord of Light, she can work magic and has prophetic visions"
            },
            {
                firstName: "Sandor",
                lastName: "Clegane",
                hairColor: "Brown",
                eyeColor: "Brown",
                height: 6.6,
                title: "'The Hound'",
                origin: "Clegane",
                description: "Regarded as one of the most dangerous and skilled fighters in Westeros"
            },
            {
                firstName: "Bran",
                lastName: "Stark",
                hairColor: "Auburn",
                eyeColor: "Blue",
                height: 5.11,
                title: "'The Three-Eyed Raven'",
                origin: "Winterfell",
                description: "Can inhabit animals and trees, enter the minds of people and have visions"
            },
            {
                firstName: "Daenerys",
                lastName: "Targaryen",
                hairColor: "Silver-gold",
                eyeColor: "Violet",
                height: 5.2,
                title: "'Mother of Dragons' and 'Khaleesi'",
                origin: "King's Landing",
                description: "Resistant to fire, ability to bond with dragons"
            },
            {
                firstName: "The Night",
                lastName: "King",
                hairColor: "White",
                eyeColor: "Blue",
                height: 5.11,
                title: "'Master of the White Walkers'",
                origin: "Weirwood Heart Tree",
                description: "Supernatural powers such as raising the dead and turning babies in White Walkers"
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("GotCharacters", null, {})
    }
};