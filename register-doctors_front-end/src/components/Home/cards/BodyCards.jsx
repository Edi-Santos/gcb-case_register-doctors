import React from 'react';
import { Link } from 'react-router-dom';

import './bodyCards.css';

function BodyCards() {
  const OPTIONS = [
    'Cadastrar Médico',
    'Listar Médicos',
    'Atualizar Cadastro',
    'Deletar Médico',
  ];

  return (
    OPTIONS.map((option, index) => {
      const spreading = option.split(' ');
      const value = spreading[0].toLowerCase();

      return (
        <Link
          to={ `/${value}` }
          key={ index }
          className="cards"
        >
          { option }
        </Link>
      );
    })
  );
}

export default BodyCards;
