function createCountryValidation(props) {
  if (typeof props?.country !== 'string' || !props?.country?.trim()) {
    throw new Error('Country is not provided or is not a string.');
  }
  if (!props.latitude || isNaN(props.latitude)) {
    throw new Error('Latitude is not provided or is not a number.');
  }

  if (!props.longitude || isNaN(props.longitude)) {
    throw new Error('Longitude is not provided or is not a number.');
  }
}

module.exports = { createCountryValidation };
