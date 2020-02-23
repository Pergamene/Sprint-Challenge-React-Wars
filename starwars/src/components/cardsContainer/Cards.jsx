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
  const [numberOfChars, setNumberOfChars] = useState();

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      const result = await GetRequest.getRequst(pageNumber);
      setData(result.results);
      setNumberOfChars(result.count);
    }
    getData();
  }, [pageNumber]);

  const changePage = pageNumber => {
    setPageNumber(pageNumber);
  }

  if (apiData) {
    return (
      <Fragment>
        <div className={classes.root}>
          {apiData.map((characterData, index) => {
            return <Card characterData={characterData} key={index} />
          })}
        </div>
        <div className={classes.footer}>
          {apiData && <Pages numberOfChars={numberOfChars} changePage={changePage} />}
        </div>
      </Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default Cards;
