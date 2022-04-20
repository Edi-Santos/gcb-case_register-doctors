import React from 'react';
import PropTypes from 'prop-types';

function CRM({ crm, handleChange }) {
  return (
    <label htmlFor="crm">
      CRM
      <input
        id="crm"
        type="number"
        name="CRM"
        value={ crm }
        onChange={ handleChange }
        placeholder="CRM..."
      />
    </label>
  );
}

CRM.propTypes = {
  crm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CRM;
