const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var studentController = require('./controllers/studentController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:8080'}));

app.listen(8080, () => console.log('Server started at port : 8080'));

app.use('/', studentController);
