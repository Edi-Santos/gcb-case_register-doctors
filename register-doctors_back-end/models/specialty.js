const Specialty = (sequelize, DataTypes) => {
  const specialty = sequelize.define(
    'Specialty', {
      specialty: DataTypes.STRING,
    }, {
      timestamps: false,
    },
  );
  
  return specialty;
};

module.exports = Specialty;
