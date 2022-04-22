import React from 'react';
import PropTypes from 'prop-types';
import request from '../../../services/requestToItselfAPI';

import './toRegister.css';

function ToRegister({ doctorDatas }) {
  const spec1 = 2;
  const spec2 = 3;

  // Função para requisição à API e adicionar informações ao banco de dados
  // ===
  const sendToBank = async () => {
    const url = 'http://localhost:3001/doctor';
    const method = 'POST';
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    const body = {
      ...doctorDatas,
      specialty_id: [spec1, spec2],
    };

    const response = await request(url, method, headers, JSON.stringify(body));

    console.log(response);
  };
  // ===

  return (
    <button
      type="button"
      onClick={ sendToBank }
    >
      Cadastrar
    </button>
  );
}

ToRegister.propTypes = {
  doctorDatas: PropTypes.objectOf({}).isRequired,
};

export default ToRegister;
