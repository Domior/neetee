import * as React from 'react';

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import { ReactComponent as MessageIcon } from '@icons/message.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '20px',
    height: '20px',
    fill: theme.colors.white,
    transition: `all .5s ease-in-out`,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 'unset',
    width: '50px',
    height: '50px',
    padding: '0',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '400',
    textTransform: 'initial',
    color: theme.colors.white,
    backgroundColor: theme.colors.green,
    border: `2px solid transparent`,
    borderRadius: '5px',
    boxShadow: `0px 10px 20px rgba(121, 178, 86, 0.12)`,
    transition: `all .5s ease-in-out`,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.colors.green,
      border: `2px solid ${theme.colors.green}`,
      boxShadow: 'none',
      filter: `drop-shadow(0px 10px 20px rgba(121, 178, 86, 0.12))`,
    },
    '&:active, &:focus': {
      backgroundColor: theme.colors.green,
      color: theme.colors.white,
      boxShadow: `0px 10px 20px rgba(121, 178, 86, 0.12)`,
    },
    '&:disabled': {
      backgroundColor: theme.palette.primary.secondary,
      color: theme.colors.white,
      boxShadow: `0px 10px 20px rgba(121, 178, 86, 0.12)`,
    },
    '&:hover svg': {
      fill: theme.colors.green,
      transition: `all .5s ease-in-out`,
    },
    '&:focus svg, &:active svg ': {
      fill: theme.colors.white,
      transition: `all .5s ease-in-out`,
    },
  },
}));

const ToMessageButton = () => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained">
      <MessageIcon className={classes.icon} />
    </Button>
  );
};

export default ToMessageButton;
