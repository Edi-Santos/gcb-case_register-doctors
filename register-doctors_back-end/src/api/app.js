const express = require('express');

const Doctor = require('../controllers/Doctor');

const app = express();
app.use(express.json());

app.post('/doctor', Doctor.insertDoctor);

module.exports = app;
