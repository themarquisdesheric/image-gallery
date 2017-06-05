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

app.get('/albums/:id', (req, res) => {
  const _id = new ObjectId(req.params.id);

  connection.db.collection('albums')
    .findOne({ _id })
    .then(album => {
      if (!album) {
        res.status(404).send({ error: 'resource not found' });
      } else {
        res.send(album);
      }
    });
});

app.post('/albums', (req, res) => {
  connection.db.collection('albums')
    .insert(Object.assign({}, req.body, { images: []}))
    .then(res => res.ops[0])
    .then(savedAlbum => res.send(savedAlbum));
});

app.delete('/albums/:id', (req, res) => {
  const _id = new ObjectId(req.params.id);
  connection.db.collection('albums')
    .deleteOne({ _id })
    .then(result => res.send(result));
});

app.post('/albums/:albumId/images', (req, res) => {
  const albumId = new ObjectId(req.params.albumId);

  connection.db.collection('albums')
    .findOneAndUpdate(
      { _id: albumId},
      { $push: { images: req.body } },
      { returnNewDocument: true }
    )
      .then(saved => res.send(saved.value));
});

module.exports = app;
