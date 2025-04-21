const express = require("express");
const upload = require("../middleware/multer");
const validate = require("../middleware/zodvaidate_req");
const { setupOrganisationValidate } = require("../zodvalidate/organisationValidate");
const { setupOrganisation, login, getorganisationdetails } = require("../controller/organisationController");
const verifyToken = require("../middleware/jwt");
const exvalidate = require("../middleware/ex_validate_req");
const { setupOrganisationValidateby_express } = require("../expressvalidate/expressValidate");
const orgrouter = express.Router();

orgrouter.post("/setup_organisation", upload.none(),exvalidate(setupOrganisationValidateby_express),setupOrganisation)
orgrouter.post("/login", upload.none(),login)
orgrouter.get("/get_org_details", upload.none(),verifyToken, getorganisationdetails)

module.exports = orgrouter;    