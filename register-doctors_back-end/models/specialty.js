const Specialty = (sequelize, DataTypes) => {
  const specialty = sequelize.define(
    'Specialty', {
      specialty: DataTypes.STRING,
    }, {
      timestamps: false,
    },
  );

  specialty.associate = (models) => {
    specialty.belongsTo(models.Doctor, {
      foreignKey: 'specialty_id',
      as: 'doctor',
    });
  };
  
  return specialty;
};

module.exports = Specialty;
