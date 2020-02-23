import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pageNumber: {
    cursor: 'pointer',
  },
});

const Pages = props => {
  const { changePage, numberOfChars } = props;
  const classes = useStyles();

  const makePageNumberArray = () => {
    const NUMBER_OF_CHARACTERS = numberOfChars;
    const CHARACTERS_PER_PAGE = 10;
    const pages = Math.ceil(NUMBER_OF_CHARACTERS / CHARACTERS_PER_PAGE);
    const nums = [];
    for (let i = 1; i <= pages; i++) {
      nums.push(i);
    }
    return nums;
  }

  const pages = makePageNumberArray();

  return (
    <div>
      <span>Page: </span>
      {pages.map(pageNumber => {
        return <span className={classes.pageNumber} key={pageNumber} onClick={() => changePage(pageNumber)}>{pageNumber} </span>
      })}
    </div>
  );
};

export default Pages;
