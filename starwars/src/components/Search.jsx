import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GetRequest from '../services/GetRequest';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '10px solid yellow',
    backgroundColor: 'black',
    borderRadius: '50px',
    padding: '20px',
    width: '250px',
    margin: '0 auto 50px'
  },
  label: {
    color: 'yellow',
    marginBottom: '20px',
  },
  input: {
    backgroundColor: 'yellow',
    width: '220px',
    height: '20px',
    paddingLeft: '20px',
    margin: '0 auto',
    border: '1px solid yellow',
    borderRadius: '50px',
  },
});

const Search = props => {
  const classes = useStyles();
  const { setData, setNumberOfChars } = props;
  const [searchParam, setSearchParam] = useState('');

  const handleChanges = event => {
    setSearchParam(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    const getSearchData = async () => {
      const result = await GetRequest.getRequestSearch(searchParam);
      setNumberOfChars(result.count);
      setData(result.results);
      setSearchParam('');
    };
    getSearchData();
  }

  return (
    <form className={classes.root} onSubmit={submitForm}>
      <label className={classes.label} htmlFor="search">Search</label>
      <input className={classes.input} id="search" type="text" name="search" onChange={handleChanges} value={searchParam} />
    </form>
  );
}

export default Search;
