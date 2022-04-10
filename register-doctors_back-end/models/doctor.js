const Doctor = (sequelize, DataTypes) => {
  const doctor = sequelize.define(
    // Este primeiro parâmetro -- 'doctor' -- é utilizado pelo Sequelize na hora de fazer as queries pelo JavaScript.
    'doctor', {
      name: DataTypes.STRING,
      CRM: DataTypes.NUMBER,
      telephone: DataTypes.NUMBER,
      cellphone: DataTypes.NUMBER,
      CEP: DataTypes.NUMBER,
    }, { timestamps: false },
  );

  return doctor;
};

module.exports = Doctor;
