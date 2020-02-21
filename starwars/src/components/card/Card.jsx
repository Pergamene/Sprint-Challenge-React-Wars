import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Description from './description/Description.jsx';
import Bio from './bio/Bio.jsx';

const useStyles = makeStyles({
  root: {
    width: '250px',
    border: '10px solid yellow',
    borderRadius: '50px',
    backgroundColor: 'black',
    color: 'yellow',
    textAlign: 'left',
    padding: '0 20px',
    marginBottom: '50px',
  },
  h2: {
    textAlign: 'center',
    textDecoration: 'underline',
  },
});

const Card = props => {
  const { name } = props.characterData;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.h2}>{name}</h2>
      <Bio characterData={props.characterData} />
      <Description characterData={props.characterData} />
    </div>
  );
};

export default Card;
