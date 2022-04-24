import React from 'react';
import PropTypes from 'prop-types';

function Tr({ docs }) {
  return (
    <tr>
      {
        Object.keys(docs[0]).map((element, index) => (
          <th key={ index }>
            { element }
          </th>
        ))
      }
    </tr>
  );
}

Tr.propTypes = {
  docs: PropTypes.shape([{}]).isRequired,
};

export default Tr;
