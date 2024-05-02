const { Types } = require('mongoose');

function deleteCountryByIdValidation(id) {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Check if id is correct!');
  }
}

module.exports = { deleteCountryByIdValidation };
