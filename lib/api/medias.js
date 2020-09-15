import express from 'express';
import { validate } from 'express-validation'
import Media from '../services/Media'
import { createSchema, updateSchema } from './schemas/medias.schema'
const router = express.Router();

router
  .get('/', (req, res) => {
    res.json(Media.all())
  })
  .get('/:id', (req, res) => {
    const { id } = req.params
    res.json(Media.findById(id))
  })
  .post('/',
    validate(createSchema, {}, {}),
    (req, res) => {
      res.status(201).json(Media.create(req.body));
    })
  .put('/:id',
    validate(updateSchema, {}, {}),
    (req, res) => {
      const { params: { id }, body } = req
      res.json(Media.update(id, body));
    });

export default router;
