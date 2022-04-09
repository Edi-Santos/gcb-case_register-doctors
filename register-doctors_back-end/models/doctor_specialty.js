const DoctorSpecialty = (sequelize, _DataTypes) => {
  const doctorSpecialty = sequelize.define(
    'doctor_specialty', {}, { timestamps: false },
  );
  
  doctorSpecialty.associate = (models) => {
    models.doctor.belongsToMany(models.doctor, {
      as: 'doctors',
      through: doctorSpecialty,
      foreignKey: 'doctor_id',
      otherKey: 'specialty_id',
    });

    models.specialty.belongsToMany(models.specialty, {
      as: 'specialties',
      through: doctorSpecialty,
      foreignKey: 'specialty_id',
      otherKey: 'doctor_id',
    });
  };

  return doctorSpecialty;
};

module.exports = DoctorSpecialty;
