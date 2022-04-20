import React from 'react';
import PropTypes from 'prop-types';

function Name({ name, handleChange }) {
  return (
    <label htmlFor="name">
      Nome
      <input
        id="name"
        type="text"
        name="name"
        value={ name }
        onChange={ handleChange }
        placeholder="Nome..."
      />
    </label>
  );
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Name;
