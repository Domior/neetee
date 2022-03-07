import * as React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import HeaderMenu from '@components/HeaderMenu';
import HeaderSubmenu from '@components/HeaderSubmenu';
import Logo from '@components/Logo';
import { ReactComponent as HomeIcon } from '@icons/home.svg';
import { ReactComponent as CatalogIcon } from '@icons/catalog.svg';
import { ReactComponent as AvatarIcon } from '@icons/avatar.svg';

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
  icon: {
    width: '24px',
    height: '24px',
    fill: theme.colors.gray,
    '&:hover *': {
      fill: theme.colors.blue,
      transition: `fill .4s ease-in-out`,
    },
    [theme.breakpoints.down('md')]: {
      width: '20px',
      height: '20px',
    },
  },
  iconAvatar: {
    width: '55px',
    height: '55px',
    stroke: theme.colors.gray,
    fill: 'none',
    '&:hover *': {
      stroke: theme.colors.blue,
      transition: `stroke .4s ease-in-out`,
    },
    [theme.breakpoints.down('md')]: {
      width: '32px',
      height: '32px',
    },
  },
  headerDown: {
    width: '100%',
    height: headerDownHeight,
    backgroundColor: theme.palette.primary.secondary,
    [theme.breakpoints.down('md')]: {
      height: '30px',
    },
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
                    <HomeIcon className={classes.icon} />
                  </Link>
                  <Link to="/">
                    <CatalogIcon className={classes.icon} />
                  </Link>
                  <HeaderMenu />
                  <Link to="/">
                    <AvatarIcon className={classes.iconAvatar} />
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

          <Box className={classes.headerDown}>
            <HeaderSubmenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
