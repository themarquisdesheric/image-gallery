const express = require('express');
const app = express();

const dataApi = require('../../app/src/dataApi');

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use(express.static('../public'));

app.get('/albums', (req, res) => {
  dataApi.getAll().then(albums => res.send(albums));
});

module.exports = app;
