import React from 'react';
import PropTypes from 'prop-types';

function Address({ address }) {
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
          placeholder="Logradouro..."
        />
      </label>
    </>
  );
}

Address.propTypes = {
  address: PropTypes.objectOf({
    UF: PropTypes.string.isRequired,
    locality: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
};

export default Address;
