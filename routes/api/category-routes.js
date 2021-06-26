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

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include:[{ model: Product}]
    });
    // include: [{ model: Location, through: Trip, as: 'planned_trips' }]
     //if (!travellerData) {
     //   res.status(404).json({ message: 'No traveller found with this id!' });
     //   return;
     // }
    if(!categoryData){
      res.status(404).json({message: 'No Category found with this id!'});
      return;
    }

    res.status(200).json(categoryData);
  }catch (err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    // const travellerData = await Traveller.create(req.body);
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  }catch (err){
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // const travellerData = await Traveller.destroy({
  //   where: {
  //     id: req.params.id
  //   } 
  // instead of destory use update to update category 

  try {
    const categoryData = await Category({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id!'});
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
