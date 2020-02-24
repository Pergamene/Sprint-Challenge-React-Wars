import React, { Fragment } from 'react';
import Species from './Species';

const Description = props => {
  const { gender, species, height, mass, skin_color, hair_color, eye_color } = props.characterData;

  return (
    <Fragment>
      <h3>Description</h3>
      <ul>
        <li>Gender: {gender}</li>
        <Species species={species}/>
        <li>Height: {height}</li>
        <li>Mass: {mass}</li>
        <li>Skin Color: {skin_color}</li>
        <li>Hair Color: {hair_color}</li>
        <li>Eye Color: {eye_color}</li>
      </ul>
    </Fragment>
  );
};

export default Description;
