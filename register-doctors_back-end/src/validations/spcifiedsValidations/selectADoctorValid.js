const errorMessage = require('./errorMessages');

const selectADoctorValid = (doctor) => {
  if (doctor === null || doctor.length < 1) return errorMessage.doctorNotFound;

  return true;
};

module.exports = selectADoctorValid;
