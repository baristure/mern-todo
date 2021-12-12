const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');

const app = express();

// enable cors
app.use(cors());

// Express body parser 
app.use(bodyParser.json());

module.exports=app;