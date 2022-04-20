import React from 'react';
import PropTypes from 'prop-types';

function CellPhone({ cellPhone, handleChange }) {
  return (
    <label htmlFor="cellphone">
      Celular
      <input
        id="cellphone"
        type="tel"
        name="cellPhone"
        value={ cellPhone }
        onChange={ handleChange }
        placeholder="Celular..."
      />
    </label>
  );
}

CellPhone.propTypes = {
  cellPhone: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CellPhone;
