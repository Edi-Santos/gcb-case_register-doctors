import React, { useEffect, useState } from 'react';

import Th from './tableComponents/Th';

import request from '../../../services/requestToItselfAPI';

function Table() {
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const url = 'http://localhost:3001/doctor';
      const method = 'GET';
      const headers = {
        'Content-type': 'application/json; charset=UTF-8',
      };

      const docs = await request(url, method, headers);
      const { doctors } = docs;

      setAllDoctors(doctors);
    };

    getDoctors();
  }, []);

  return (
    <table>
      <Th />
    </table>
  );
}

export default Table;
