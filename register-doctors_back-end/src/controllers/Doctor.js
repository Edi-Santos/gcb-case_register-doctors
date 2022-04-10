const Doctor = require('../services/Doctor');

const insertDoctor = async (req, res) => {
  const doctorDatas = req.body;

  try {
    const newDoctor = await Doctor.insertDoctor(doctorDatas);

    if (newDoctor.message) {
      const { status, message } = newDoctor;

      return res.status(status).json({ message });
    }

    return res.status(201).json({ newDoctor });
  } catch (error) {
    console.log(`Erro no Controller || ${error.message}`);
  }
};

module.exports = {
  insertDoctor,
};
