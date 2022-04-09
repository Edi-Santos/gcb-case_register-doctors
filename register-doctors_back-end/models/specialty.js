const Specialty = (sequelize, DataTypes) => {
  const specialty = sequelize.define(
    'specialty', {
      specialty: DataTypes.STRING,
    }, {
      timestamps: false,
    },
  );

  specialty.associate = (models) => {
    specialty.belongsTo(models.doctor, {
      foreignKey: 'specialty_id',
      as: 'doctor',
    });
  };
  
  return specialty;
};

module.exports = Specialty;
