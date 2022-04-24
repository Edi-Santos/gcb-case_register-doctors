import React from 'react';
import PropTypes from 'prop-types';

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
  docs: PropTypes.shape(
    PropTypes.shape({}),
  ).isRequired,
};

export default Td;
