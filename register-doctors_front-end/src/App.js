import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import DoctorsList from './pages/DoctorsList';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cadastrar" element={ <Register /> } />
      <Route path="/listar" element={ <DoctorsList /> } />
    </Routes>
  );
}

export default App;
