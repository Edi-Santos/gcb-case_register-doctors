import React from 'react';
import PropTypes from 'prop-types';

function CEP({ cep, handleChange, onblur }) {
  return (
    <label htmlFor="cep">
      CEP
      <input
        id="cep"
        type="number"
        name="CEP"
        value={ cep }
        onChange={ handleChange }
        onBlur={ onblur }
        placeholder="CEP..."
      />
    </label>
  );
}

CEP.propTypes = {
  cep: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onblur: PropTypes.func.isRequired,
};

export default CEP;
