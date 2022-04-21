import React, { useState } from 'react';
import request from '../../services/requestToCEP';

import CellPhone from './inputs/CellPhone';
import CEP from './inputs/CEP';
import CRM from './inputs/CRM';
import Name from './inputs/Name';
import Telephone from './inputs/Telephone';
import Address from './inputs/Address';

import './body.css';

function Body() {
  const [inputs, setInputs] = useState({
    name: '',
    CRM: '',
    telephone: '',
    cellPhone: '',
    CEP: '',
  });

  const [address, setAddress] = useState({
    UF: '',
    locality: '',
    district: '',
    street: '',
  });

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addressChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onblur = async () => {
    const url = `https://viacep.com.br/ws/${inputs.CEP}/json/`;
    const req = await request(url);

    if (req) {
      const { uf, localidade, bairro, logradouro } = req;

      setAddress({
        UF: uf,
        locality: localidade,
        district: bairro,
        street: logradouro,
      });
    }
  };

  return (
    <form>
      <Name name={ inputs.name } handleChange={ handleChange } />
      <CRM crm={ inputs.CRM } handleChange={ handleChange } />
      <Telephone telephone={ inputs.telephone } handleChange={ handleChange } />
      <CellPhone cellPhone={ inputs.cellPhone } handleChange={ handleChange } />
      <CEP cep={ inputs.CEP } handleChange={ handleChange } onblur={ onblur } />
      <Address address={ address } onChange={ addressChange } />
    </form>
  );
}

export default Body;
