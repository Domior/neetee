import * as React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import HeaderMenu from '@components/HeaderMenu';
import Logo from '@components/Logo';
import HomeIcon from '@components/Icons/HomeIcon';
import CatalogIcon from '@components/Icons/CatalogIcon';
import AvatarIcon from '@components/Icons/AvatarIcon';

// const headerHeight = 150;
const headerUpHeight = 110;
const headerDownHeight = 40;

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {},
  },
  appBar: {
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'none',
    padding: '0',
  },
  headerUp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: headerUpHeight,
    paddingLeft: '110px',
    paddingRight: '115px',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      height: '100%',
      padding: `14px 20px 10px 18px`,
    },
  },
  authBtnsContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'normal',
      justifyContent: 'center',
    },
  },
  authBtns: {
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
      order: '1',
      marginTop: '10px',
      marginRight: '0',
    },
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      display: 'inline-flex',
      marginRight: '20px',
    },
    '& a:last-of-type': {
      marginRight: '0',
    },
    [theme.breakpoints.down('md')]: {
      '& a': {
        marginRight: '10px',
      },
    },
  },

  headerDown: {
    width: '100%',
    height: headerDownHeight,
    backgroundColor: theme.palette.primary.secondary,
  },
}));

export default function ButtonAppBar() {
  const [logined, setLogined] = React.useState(true);

  const classes = useStyles();

  return (
    <Box className={classes.header} component="header">
      <AppBar className={classes.appBar} position="static" component="div">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.headerUp}>
            <Link to="/">
              <Logo type="blue" />
            </Link>
            <Box className={classes.authBtnsContainer}>
              {logined ? (
                <Box className={classes.headerIcons}>
                  <Link to="/">
                    <HomeIcon />
                  </Link>
                  <Link to="/">
                    <CatalogIcon />
                  </Link>
                  <HeaderMenu />
                  <Link to="/">
                    <AvatarIcon />
                  </Link>
                </Box>
              ) : (
                <>
                  <Button
                    className={classes.authBtns}
                    variant="text"
                    color="secondary"
                  >
                    Регистрация
                  </Button>
                  <Button
                    className={classes.authBtns}
                    variant="contained"
                    color="warning"
                  >
                    Вход в систему
                  </Button>
                </>
              )}
            </Box>
          </Box>

          <Box className={classes.headerDown}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
