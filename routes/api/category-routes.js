const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({
    include: [{
      model: Product,
    }]
  })
  .then(categories => {
    res.json(categories);
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
  });
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [{
      model: Product,
    }]
  })
  .then(category => {
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
  });
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(category => {
    res.status(201).json(category);
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { category_name } = req.body;

  Category.update({ category_name }, { where: { id } })
    .then(updated => {
      if (!updated[0]) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json({ message: 'Category updated' });
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Category.destroy({ where: { id } })
    .then(deleted => {
      if (!deleted) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json({ message: 'Category deleted' });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
});

module.exports = router;
