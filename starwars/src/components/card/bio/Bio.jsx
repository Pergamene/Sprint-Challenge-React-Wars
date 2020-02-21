import React, { Fragment } from 'react';

const Bio = props => {
  const { birth_year } = props.characterData

  return (
    <Fragment>
      <h3>Bio</h3>
      <ul>
        <li>Birth Year: {birth_year}</li>
      </ul>
    </Fragment>
  );
};

export default Bio;
