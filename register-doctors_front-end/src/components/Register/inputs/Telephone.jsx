import React from 'react';
import PropTypes from 'prop-types';

function Telephone({ telephone, handleChange }) {
  return (
    <label htmlFor="telephone">
      Telefone
      <input
        id="telephone"
        type="tel"
        name="telephone"
        value={ telephone }
        onChange={ handleChange }
        placeholder="Telefone..."
      />
    </label>
  );
}

Telephone.propTypes = {
  telephone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Telephone;
