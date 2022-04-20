import React from 'react';
import PropTypes from 'prop-types';

function CEP({ cep, handleChange }) {
  return (
    <label htmlFor="cep">
      CEP
      <input
        id="cep"
        type="number"
        name="CEP"
        value={ cep }
        onChange={ handleChange }
        placeholder="CEP..."
      />
    </label>
  );
}

CEP.propTypes = {
  cep: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CEP;
