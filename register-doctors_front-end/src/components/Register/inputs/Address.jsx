import React from 'react';
import PropTypes from 'prop-types';

function Address({ address, onChange }) {
  const { UF = '', locality = '', district = '', street = '' } = address;

  return (
    <>
      <label htmlFor="uf">
        UF
        <input
          id="uf"
          type="text"
          name="UF"
          value={ UF }
          onChange={ onChange }
          placeholder="UF..."
        />
      </label>
      <label htmlFor="locality">
        Localidade
        <input
          id="locality"
          type="text"
          name="locality"
          value={ locality }
          onChange={ onChange }
          placeholder="Localidade..."
        />
      </label>
      <label htmlFor="district">
        Bairro
        <input
          id="district"
          type="text"
          name="district"
          value={ district }
          onChange={ onChange }
          placeholder="Bairro..."
        />
      </label>
      <label htmlFor="street">
        Logradouro
        <input
          id="street"
          type="text"
          name="street"
          value={ street }
          onChange={ onChange }
          placeholder="Logradouro..."
        />
      </label>
    </>
  );
}

Address.propTypes = {
  address: PropTypes.shape({
    UF: PropTypes.string.isRequired,
    locality: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Address;
