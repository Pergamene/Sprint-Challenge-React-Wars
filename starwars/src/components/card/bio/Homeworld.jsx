import React, { useState, useEffect } from 'react';

import GetRequest from '../../../services/GetRequest.js';

const Homeworld = props => {
  const { homeworld } = props;
  const [homeworldData, setHomeworldData] = useState();

  useEffect(() => {
    const getHomeworldData = async () => {
      const result = await GetRequest.getRequestHomeworld(homeworld);
      setHomeworldData(result);
    };
    getHomeworldData();
  });

  if (homeworldData) {
    return (
      <li>Homeworld: {homeworldData}</li>
    );
  } else {
    return <li></li>
  }
}

export default Homeworld;
