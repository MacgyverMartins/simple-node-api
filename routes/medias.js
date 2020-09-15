const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Media = require('../services/Media')

/* GET medias listing. */
router
  .get('/', function (req, res) {
    res.json(Media.all())
  })
  .get('/:id', function (req, res) {
    const { id } = req.params
    res.json(Media.findById(id))
  })
  .post('/', function (req, res) {
    res.status(201).json(Media.create(req.body));
  })

module.exports = router;
