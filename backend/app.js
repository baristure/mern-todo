//Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Local Files
const router = require('./routes/index');

const app = express();

// enable cors
app.use(cors());

// Express body parser 
app.use(bodyParser.json());

app.use("/api/v1", router);

module.exports = app;