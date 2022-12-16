const express = require('express');
const router = express.Router();

// Load Bathroom model
const Bathroom = require('../../models/Bathroom');

// @route GET api/bathrooms/test
// @description tests bathrooms route
// @access Public
router.get('/test', (req, res) => res.send('bathroom route testing!'));

// @route GET api/bathrooms
// @description Get all bathrooms
// @access Public
router.get('/', (req, res) => {
  Bathroom.find()
  .then(bathroom => res.json(bathroom))
  .catch(err => res.status(404).json({ nobathroomsfound: 'No Bathrooms found' }));
});

// @route GET api/bathrooms/:id
// @description Get single bathroom by id
// @access Public
router.get('/:id', (req, res) => {
  Bathroom.findById(req.params.id)
  .then(bathroom => res.json(bathroom))
  .catch(err => res.status(404).json({ nobathroomfound: 'No Bathroom found' }));
});
  
// @route GET api/bathrooms
// @description add/save bathroom
// @access Public
router.post('/', (req, res) => {
  Bathroom.create(req.body)
  .then(bathroom => res.json({ msg: 'Bathroom added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this bathroom' }));
});
  
// @description Update bathroom
// @route GET api/bathrooms/:id
// @access Public
router.put('/:id', (req, res) => {
  Bathroom.findByIdAndUpdate(req.params.id, req.body)
  .then(bathroom => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});
  
// @route GET api/bathrooms/:id
// @description Delete bathroom by id
// @access Public
router.delete('/:id', (req, res) => {
  Bathroom.findByIdAndRemove(req.params.id, req.body)
    .then(bathroom => res.json({ mgs: 'Bathroom entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such bathroom' }));
});
  
  module.exports = router;