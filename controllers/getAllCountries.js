const Country = require('../models/countryModel');

//GET
function getAllCountries() {
  const countries = Country.find({});

  return countries;
}

module.exports = getAllCountries;
