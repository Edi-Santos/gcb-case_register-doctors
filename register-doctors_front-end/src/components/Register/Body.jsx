import React, { useState } from 'react';

import CellPhone from './inputs/CellPhone';
import CEP from './inputs/CEP';
import CRM from './inputs/CRM';
import Name from './inputs/Name';
import Telephone from './inputs/Telephone';

function Body() {
  const [inputs, setInputs] = useState({
    name: '',
    CRM: '',
    telephone: '',
    cellPhone: '',
    CEP: '',
  });

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <Name name={ inputs.name } handleChange={ handleChange } />
      <CRM crm={ inputs.CRM } handleChange={ handleChange } />
      <Telephone telephone={ inputs.telephone } handleChange={ handleChange } />
      <CellPhone cellPhone={ inputs.cellPhone } handleChange={ handleChange } />
      <CEP />
    </form>
  );
}

export default Body;
