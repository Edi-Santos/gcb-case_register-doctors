const Doctor = (sequelize, DataTypes) => {
  const doctor = sequelize.define(
    // Este primeiro parâmetro -- 'doctor' -- é utilizado pelo Sequelize na hora de fazer as queries pelo JavaScript.
    'doctor', {
      name: DataTypes.STRING,
      CRM: DataTypes.NUMBER,
      telephone: DataTypes.NUMBER,
      cellphone: DataTypes.NUMBER,
      CEP: DataTypes.NUMBER,
      // eslint-disable-next-line camelcase
      specialty_id: DataTypes.NUMBER,
    }, { timestamps: false },
  );

  doctor.associate = (models) => {
    doctor.hasMany(models.specialty, {
      foreignKey: 'specialty_id',
      as: 'specialty',
    });
  };

  return doctor;
};

module.exports = Doctor;