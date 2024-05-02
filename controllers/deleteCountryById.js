const Country = require('../models/countryModel');
const {
  deleteCountryByIdValidation,
} = require('../validation/deleteCountryByIdValidation');


// DELETE country by ID
async function deleteCountryById(id) {
  deleteCountryByIdValidation(id);
  try {
    await Country.findByIdAndDelete(id);
    return { message: 'Country deleted' };
  } catch (error) {
    console.error(`Error:${error.message}`);
    throw new Error('Failed to delete country');
  }
}

module.exports = deleteCountryById;
