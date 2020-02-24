import React, { useState, useEffect } from 'react';

import GetRequest from '../../../services/GetRequest.js';

const Species = props => {
  const { species } = props;
  const [speciesData, setSpeciesData] = useState();

  useEffect(() => {
    const getSpeciesData = async () => {
      const result = await GetRequest.getRequestSpecies(species);
      setSpeciesData(result);
    };
    getSpeciesData();
  });

  if (speciesData) {
    return (
      <li>Species: {speciesData}</li>
    );
  } else {
    return <li></li>
  }
}

export default Species;
