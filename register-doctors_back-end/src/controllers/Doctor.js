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

const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const doctorDatas = req.body;

  try {
    const updateDoc = await Doctor.updateDoctor(id, doctorDatas);

    if (updateDoc.message) {
      const { status, message } = updateDoc;

      return res.status(status).json({ message });
    }

    return res.status(200).json({ message: 'infos doctor updated' });
  } catch (error) {
    console.log(`Erro no Controller || ${error.message}`);
  }
};

const selectADoctor = async (req, res) => {
  const { key, value } = req.params;

  try {
    const getDoctor = await Doctor.selectADoctor(key, value);

    if (getDoctor.message) {
      const { status, message } = getDoctor;

      return res.status(status).json({ message });
    }

    return res.status(200).json({ getDoctor });
  } catch (error) {
    console.log(`Erro no Controller || ${error.message}`);
  }
};

const selectADoctorByName = async (req, res) => {
  const { name } = req.query;

  try {
    const getDoctor = await Doctor.selectADoctorByName(name);

    if (getDoctor.message) {
      const { status, message } = getDoctor;

      return res.status(status).json({ message });
    }

    return res.status(200).json({ getDoctor });
  } catch (error) {
    console.log(`Erro no Controller || ${error.message}`);
  }
};

const getAllDoctors = async (_req, res) => {
  try {
    const doctors = await Doctor.getAllDoctors();

    return res.status(200).json({ doctors });
  } catch (error) {
    console.log(`Erro no Controller || ${error.message}`);
  }
};

const softDeleteDoctor = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  try {
    const deleteDoctor = await Doctor.softDeleteDoctor(id, active);

    if (deleteDoctor.message) {
      const { status, message } = deleteDoctor;

      return res.status(status).json({ message });
    }

    return res.status(200).json({ message: 'successfully deactivated' });
  } catch (error) {
    console.log(`Erro no Controller || ${error.message}`);
  }
};

module.exports = {
  insertDoctor,
  updateDoctor,
  selectADoctor,
  selectADoctorByName,
  getAllDoctors,
  softDeleteDoctor,
};
