const errorMessage = require('./errorMessages');

const selectADoctorValid = (doctor) => {
  if (doctor === null || !doctor.length) return errorMessage.doctorNotFound;

  return true;
};

module.exports = selectADoctorValid;
