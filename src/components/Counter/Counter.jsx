import * as React from 'react';

import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  counterContainer: {
    display: 'flex',
    height: '50px',
    border: `1px solid ${theme.palette.primary.secondary}`,
    borderRadius: '5px',
    backgroundColor: theme.colors.white,
    [theme.breakpoints.down('md')]: {
      height: '30px',
    },
  },
  counterBtn: {
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '16px',
    color: `${theme.colors.black}`,
    padding: '0 20px',
    minWidth: 'unset',
    '& svg': {
      fontSize: 'unset',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      padding: '0 12px',
    },
  },
  counter: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '16px',
    color: `${theme.colors.black} !important`,
    borderLeft: `1px solid ${theme.palette.primary.secondary}`,
    borderRight: `1px solid ${theme.palette.primary.secondary}`,
    borderRadius: 'unset',
    padding: '0 30px',
    minWidth: 'unset',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
      lineHeight: '12px',
      padding: '0 18px',
    },
  },
}));

const Counter = () => {
  const [count, setCount] = React.useState(1);

  const classes = useStyles();

  return (
    <div
      className={classes.counterContainer}
      aria-label="counter-buttons-group"
    >
      <Button
        className={classes.counterBtn}
        disabled={count <= 1}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        <RemoveIcon />
      </Button>
      <Button className={classes.counter} disabled>
        {count}
      </Button>
      <Button
        className={classes.counterBtn}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default Counter;
