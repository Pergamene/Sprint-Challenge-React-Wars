import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pageNumber: {
    cursor: 'pointer',
  },
});

const Pages = props => {
  const { changePage } = props;
  const classes = useStyles();

  return (
    <div>
      <span>Page: </span>
      <span className={classes.pageNumber} onClick={() => changePage(1)}>1 </span>
      <span className={classes.pageNumber} onClick={() => changePage(2)}>2 </span>
      <span className={classes.pageNumber} onClick={() => changePage(3)}>3 </span>
      <span className={classes.pageNumber} onClick={() => changePage(4)}>4 </span>
      <span className={classes.pageNumber} onClick={() => changePage(5)}>5 </span>
      <span className={classes.pageNumber} onClick={() => changePage(6)}>6 </span>
      <span className={classes.pageNumber} onClick={() => changePage(7)}>7 </span>
      <span className={classes.pageNumber} onClick={() => changePage(8)}>8 </span>
      <span className={classes.pageNumber} onClick={() => changePage(9)}>9</span>
    </div>
  );
};

export default Pages;
