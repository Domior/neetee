import * as React from 'react';

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import { ReactComponent as DownloadIcon } from '@icons/download.svg';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    width: '75%',
    justifyContent: 'center',
  },
  icon: {
    width: '20px',
    height: '20px',
    fill: theme.colors.white,
    marginLeft: '10px',
    transition: `all .5s ease-in-out`,
  },
  button: {
    '&:hover svg': {
      fill: theme.colors.blue,
      transition: `all .5s ease-in-out`,
    },
    '&:focus svg, &:active svg ': {
      fill: theme.colors.white,
      transition: `all .5s ease-in-out`,
    },
  },
}));

const LoadMoreButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button className={classes.button} variant="contained" color="info">
        <span>Загрузить ещё</span>
        <DownloadIcon className={classes.icon} />
      </Button>
    </div>
  );
};

export default LoadMoreButton;
