import * as React from 'react';

import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  counterContainer: {
    display: 'flex',
    height: '50px',
    border: `2px solid ${theme.palette.primary.secondary}`,
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
    borderRadius: 0,
    '& svg': {
      fontSize: 'unset',
    },
    '&:active, &:hover': {
      backgroundColor: '#4270AD',
      transition: `all .5s linear`,
    },
    '&:active svg, &:hover svg': {
      fill: '#ffff',
      transition: `all .5s ease-out`,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      padding: '0 12px',
    },
  },
  counter: {
    width: '70px',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '16px',
    color: `${theme.colors.black} !important`,
    border: 'none',
    borderLeft: `2px solid ${theme.palette.primary.secondary}`,
    borderRight: `2px solid ${theme.palette.primary.secondary}`,
    borderRadius: 'unset',
    textAlign: 'center',
    minWidth: 'unset',
    backgroundColor: 'transparent',
    outline: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
      lineHeight: '12px',
      width: '50px',
    },
  },
  active: {
    borderColor: '#4270AD',
    transition: `all .5s linear`,
    '& input': {
      borderColor: '#4270AD',
      transition: `all .5s linear`,
    },
  },
}));

const Counter = () => {
  const [count, setCount] = React.useState(1);
  const [active, setActive] = React.useState(null);

  const classes = useStyles();

  return (
    <div
      className={`
        ${classes.counterContainer}
        ${active === 'active' ? classes.active : ''}
      `}
      aria-label="counter-buttons-group"
      onMouseLeave={() => setActive('')}
    >
      <Button
        className={classes.counterBtn}
        disabled={count <= 1}
        onMouseDown={() => {
          // setActive('active');
          setCount(count - 1);
        }}
        // onMouseUp={() => setActive('')}
        onMouseEnter={() => setActive('active')}
      >
        <RemoveIcon />
      </Button>
      <input
        className={classes.counter}
        value={count}
        onChange={(e) => setCount(+e.target.value)}
        onFocus={() => setActive('active')}
        onBlur={() => setActive('')}
      />
      <Button
        className={classes.counterBtn}
        onMouseDown={() => {
          setActive('active');
          setCount(count + 1);
        }}
        // onMouseUp={() => setActive('')}
        onMouseEnter={() => setActive('active')}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default Counter;
