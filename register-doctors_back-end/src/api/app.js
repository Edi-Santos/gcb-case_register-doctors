const express = require('express');

const Doctor = require('../controllers/Doctor');

const app = express();
app.use(express.json());

app.post('/doctor', Doctor.insertDoctor);
app.put('/doctor/:id', Doctor.updateDoctor);
app.get('/doctor/:id', Doctor.selectADoctor);

module.exports = app;
