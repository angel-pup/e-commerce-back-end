const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll()
    .then(tags => res.status(200).json(tags))
    .catch(err => res.status(400).json({ message: err.message }));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Tag.findByPk(id)
    .then(tag => {
      if (!tag) {
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json(tag);
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(tag => res.status(201).json(tag))
    .catch(err => res.status(400).json({ message: err.message }));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { tag_name } = req.body;

  Tag.update({ tag_name }, { where: { id } })
    .then(updated => {
      if (!updated[0]) {
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json({ message: 'Tag updated' });
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Tag.destroy({ where: { id } })
    .then(deleted => {
      if (!deleted) {
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json({ message: 'Tag deleted' });
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;
