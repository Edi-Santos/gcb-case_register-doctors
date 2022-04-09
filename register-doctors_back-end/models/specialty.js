const Specialty = (sequelize, DataTypes) => {
  const specialty = sequelize.define(
    // Este primeiro parâmetro -- 'specialty' -- é utilizado pelo Sequelize na hora de fazer as queries pelo JavaScript.
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
