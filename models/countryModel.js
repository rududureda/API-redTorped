const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema(
  {
    country: { type: String, required: true, unique: true },
    latitude: { type: Number },
    longitude: { type: Number },
  }
);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
