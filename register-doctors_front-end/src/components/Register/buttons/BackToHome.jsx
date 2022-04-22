import React from 'react';
import { Link } from 'react-router-dom';

import './backToHome.css';

function BackToHome() {
  return (
    <Link to="/" className="back-to-home">
      Voltar
    </Link>
  );
}

export default BackToHome;
