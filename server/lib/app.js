const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectID;

const connection = require('./connect');

app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use(express.static('../public'));

app.get('/albums', (req, res) => {
  connection.db.collection('albums')
    .find({})
    .toArray()
    .then(albums => {
      if (!albums) {
        res.status(404).send({ error: 'resource not found' });
      } else {
        res.send(albums);
      }
    });
});

module.exports = app;
