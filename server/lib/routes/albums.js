const router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;

const connection = require('../connect');

router
  .get('/', (req, res, next) => {
    connection.db.collection('albums')
      .find({})
      .toArray()
      .then(albums => {
        if (!albums) {
          res.status(404).send({ error: 'resource not found' });
        } else {
          res.send(albums);
        }
      })
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const _id = new ObjectId(req.params.id);

    connection.db.collection('albums')
      .findOne({ _id })
      .then(album => {
        if (!album) {
          res.status(404).send({ error: 'resource not found' });
        } else {
          res.send(album);
        }
      })
      .catch(next);
  })

  .post('/', (req, res, next) => {
    connection.db.collection('albums')
      .insert(Object.assign({}, req.body, { images: []}))
      .then(res => res.ops[0])
      .then(savedAlbum => res.send(savedAlbum))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const _id = new ObjectId(req.params.id);

    connection.db.collection('albums')
      .deleteOne({ _id })
      .then(result => res.send(result))
      .catch(next);
  })

  .post('/:albumId/images', (req, res, next) => {
    const albumId = new ObjectId(req.params.albumId);

    connection.db.collection('albums')
      .findOneAndUpdate(
        { _id: albumId},
        { $push: { images: Object.assign({}, req.body, { _id: new ObjectId() }) } },
        { returnOriginal: false }
      )
        .then(saved => res.send(saved.value.images))
        .catch(next);
  })

  .delete('/:albumId/images/:imageId', (req, res, next) => {
    const albumId = new ObjectId(req.params.albumId);
    const imageId = new ObjectId(req.params.imageId);

    connection.db.collection('albums')
      .findOneAndUpdate(
        { _id: albumId},
        { $pull: { images: { _id: imageId } } },
        { returnNewDocument: true }
      )
        .then(updated => res.send(updated))
        .catch(next);

  });

module.exports = router;
