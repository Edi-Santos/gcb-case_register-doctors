import React from 'react';
import PropTypes from 'prop-types';

import './td.css';

function Td({ docs }) {
  console.log(docs);
  return (
    <>
      {
        docs.map((doc, index) => (
          <tr key={ index }>
            <td>{ doc.name }</td>
            <td>{ doc.CRM }</td>
            <td>{ doc.telephone }</td>
            <td>{ doc.cellphone }</td>
          </tr>
        ))
      }
    </>
  );
}

Td.propTypes = {
  docs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({}),
    ]),
  ).isRequired,
};

export default Td;
