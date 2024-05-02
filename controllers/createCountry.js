const Country = require('../models/countryModel');
const {
  createCountryValidation,
} = require('../validation/createCountryValidation');

//POST create new counties
async function createCountry(props) {
  createCountryValidation(props);
  console.log('props:', props);

  const response = await Country.create(props);

  return response;
}

module.exports = createCountry;
