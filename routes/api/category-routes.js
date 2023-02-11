const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
// });

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
// });


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
  Category.create({
    name: req.body.name
  })
  .then(category => {
    res.status(201).json(category);
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
});

router.put('/:id', (req, res) => {
  Category.findByPk(req.params.id)
  .then(category => {
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return category.update({
      name: req.body.name
    });
  })
  .then(updatedCategory => {
    res.json(updatedCategory);
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
