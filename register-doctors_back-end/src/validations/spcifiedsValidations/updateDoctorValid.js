const errorMessage = require('./errorMessages');

const updateDoctorValid = (updateDoc) => !updateDoc && errorMessage.notUpdated;

module.exports = updateDoctorValid;
