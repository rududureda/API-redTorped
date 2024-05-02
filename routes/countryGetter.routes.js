const { Router } = require('express');
const { getAllCountries } = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAllCountries();
    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
