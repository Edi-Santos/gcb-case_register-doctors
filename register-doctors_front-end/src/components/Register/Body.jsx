import React, { useState } from 'react';

import CellPhone from './inputs/CellPhone';
import CEP from './inputs/CEP';
import CRM from './inputs/CRM';
import Name from './inputs/Name';
import Telephone from './inputs/Telephone';

function Body() {
  const [inputs, setInputs] = useState({
    name: '',
    CRM: 0,
    telephone: 0,
    cellPhone: 0,
    CEP: 0,
  });

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setInputs({
      [name]: value,
    });
  };

  return (
    <form>
      <Name name={ inputs.name } handleChange={ handleChange } />
      <CRM />
      <Telephone />
      <CellPhone />
      <CEP />
    </form>
  );
}

export default Body;
