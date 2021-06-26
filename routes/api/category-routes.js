const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });
      if(!categoryData){
        res.status(404).json({message: 'No Catogory found in this Id'});
        return;
      }

    // include: [{ model: Location, through: Trip, as: 'planned_trips' }]
    //if (!travellerData) {
    //   res.status(404).json({ message: 'No traveller found with this id!' });
    //   return;
    // }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
