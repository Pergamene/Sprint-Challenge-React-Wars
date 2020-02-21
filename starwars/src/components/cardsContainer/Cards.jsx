import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../card/Card.jsx';
import GetRequest from '../../services/GetRequest.js';

const useStyles = makeStyles({
  root: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

const Cards = () => {
  const [apiData, setData] = useState();
  const [pageNumber, setPageNumber] = useState('1');

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      const result = await GetRequest.getRequst(pageNumber);
      setData(result);
    }
    getData();
  }, [pageNumber]);

  return (
    <div className={classes.root}>
      {apiData && <Card characterData={apiData[0]} />}
      {apiData && <Card characterData={apiData[1]} />}
      {apiData && <Card characterData={apiData[2]} />}
      {apiData && <Card characterData={apiData[3]} />}
      {apiData && <Card characterData={apiData[4]} />}
      {apiData && <Card characterData={apiData[5]} />}
      {apiData && <Card characterData={apiData[6]} />}
      {apiData && <Card characterData={apiData[7]} />}
      {apiData && <Card characterData={apiData[8]} />}
      {apiData && <Card characterData={apiData[9]} />}
    </div>
  );
};

export default Cards;
