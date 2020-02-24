import React, { Fragment } from 'react';

import Homeworld from './Homeworld.jsx';

const Bio = props => {
  const { birth_year, homeworld } = props.characterData

  return (
    <Fragment>
      <h3>Bio</h3>
      <ul>
        <li>Birth Year: {birth_year}</li>
        <Homeworld homeworld={homeworld}/>
      </ul>
    </Fragment>
  );
};

export default Bio;
