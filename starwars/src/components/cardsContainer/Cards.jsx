import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../card/Card.jsx';
import Pages from './Pages.jsx';
import GetRequest from '../../services/GetRequest.js';

const useStyles = makeStyles({
  root: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  footer: {
    fontSize: '2em',
    color: 'yellow',
    marginBottom: '50px',
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

  const changePage = pageNumber => {
    setPageNumber(pageNumber);
  }

  return (
    <Fragment>
      <div className={classes.root}>
        {apiData && <Card characterData={apiData[0]} />}
        {apiData && apiData.length > 0 && <Card characterData={apiData[1]} />}
        {apiData && apiData.length > 1 && <Card characterData={apiData[2]} />}
        {apiData && apiData.length > 2 && <Card characterData={apiData[3]} />}
        {apiData && apiData.length > 3 && <Card characterData={apiData[4]} />}
        {apiData && apiData.length > 4 && <Card characterData={apiData[5]} />}
        {apiData && apiData.length > 5 && <Card characterData={apiData[6]} />}
        {apiData && apiData.length > 6 && <Card characterData={apiData[7]} />}
        {apiData && apiData.length > 7 && <Card characterData={apiData[8]} />}
        {apiData && apiData.length > 8 && <Card characterData={apiData[9]} />}
      </div>
      <div className={classes.footer}>
        {apiData && <Pages changePage={changePage} />}
      </div>
    </Fragment>
  );
};

export default Cards;
