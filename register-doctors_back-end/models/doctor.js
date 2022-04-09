const Doctor = (sequelize, DataTypes) => {
  const doctor = sequelize.define(
    'Doctor', {
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
    doctor.hasMany(models.Specialty, {
      foreignKey: 'specialty_id',
      as: 'specialty',
    });
  };

  return doctor;
};

module.exports = Doctor;
