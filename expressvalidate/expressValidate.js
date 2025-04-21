const { body } = require("express-validator");

const setupOrganisationValidateby_express = [
    body("name")
        .notEmpty()
        .withMessage("Name of your organisation cannot be empty"),
    
    body("tagline")
        .notEmpty()
        .withMessage("Tagline of your organisation cannot be empty"),

    body("mobile")
        .isLength({ min: 10, max: 10 })
        .withMessage("Mobile number should be 10 digit")
        .isNumeric()
        .withMessage("Mobile number should contain only digits"),

    body("email")
        .isEmail()
        .withMessage("Email is not valid"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password should be minimum 6 character"),
];

module.exports = {
    setupOrganisationValidateby_express,
};
