const express = require("express");
var cors = require('cors');
const { main } = require("./connection/db");
const { router } = require("./routes/router");
const orgrouter = require("./routes/oraganisationRoutes");

require("dotenv").config();
const app = express();

app.use(cors())

app.use(express.json()); 
app.use("/", router);
app.use("/organisation",orgrouter);


app.listen(3001, main);
