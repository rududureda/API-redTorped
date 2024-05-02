const { Router } = require('express');
const { createCountry, deleteCountryById } = require('../controllers');

const router = Router();


router.post('/', async (req, res) => {
  try {
    const data = await createCountry(req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const result = await deleteCountryById(req.params.id);
    console.log('req.params.id:', req.params.id);
    res.json(result);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
