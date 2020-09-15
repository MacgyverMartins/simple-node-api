import express from 'express';
const router = express.Router();
import Media from '../services/Media'

router
  .get('/', (req, res) => {
    res.json(Media.all())
  })
  .get('/:id', (req, res) => {
    const { id } = req.params
    res.json(Media.findById(id))
  })
  .post('/', (req, res) => {
    res.status(201).json(Media.create(req.body));
  });

export default router;
