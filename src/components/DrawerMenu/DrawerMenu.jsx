import React from 'react';

import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@static/icons/menu.svg';

import DrawerMenuNav from '@components/DrawerMenu/DrawerMenuNav';
import Logo from '@components/Logo';
import personPhoto from '@static/person-photo.jpg';

const drawerWidth = 250;
const drawerHeight = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    backgroundColor: theme.colors.black,
    [theme.breakpoints.down('md')]: {
      marginTop: drawerHeight,
    },
  },
  appBar: {
    position: 'unset',
    width: drawerWidth,
    padding: `0 !important`,
    marginBottom: '-1px',
    backgroundColor: theme.colors.black,
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      right: 'unset',
      zIndex: theme.zIndex.drawer + 1,
      width: '100%',
      height: drawerHeight,
      justifyContent: 'center',
    },
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerHeader: {
    flexDirection: 'column',
    paddingTop: '20px',
    minHeight: 'unset',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0',
      paddingLeft: '20px',
      paddingRight: '20px',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  drawerPaper: {
    position: 'unset',
    backgroundColor: theme.colors.black,
    border: 'none',
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      width: drawerWidth,
      paddingTop: drawerHeight,
    },
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      padding: '0',
      minWidth: '20px',
    },
  },
  logo: {
    width: '123px',
    height: '43px',
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      width: '103px',
      height: '40px',
      marginBottom: '0',
    },
  },
  personPhoto: {
    width: '102px',
    height: '102px',
    border: `2px solid ${theme.colors.white}`,
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
      width: '40px',
      height: '40px',
      marginBottom: '0',
    },
  },
  pesonName: {
    display: 'block',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    color: theme.colors.white,
    marginBottom: '60px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    // ...theme.mixins.toolbar,
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none',
    // },
  },
  content: {
    display: 'none',
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexGrow: 0,
    },
  },
}));

export default function DrawerMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <Box className={classes.root} component="header">
      <AppBar position="fixed" className={classes.appBar} component="div">
        <Toolbar className={classes.drawerHeader}>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <img src={MenuIcon} alt="menu" />
          </IconButton>
          <Logo type="white" />
          <Avatar
            className={classes.personPhoto}
            src={personPhoto}
            alt="personPhoto"
          />
          <Typography className={classes.pesonName}>???????????? ????????????</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={isMdUp ? 'permanent' : 'temporary'}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        BackdropProps={{ invisible: true }}
      >
        <DrawerMenuNav />
      </Drawer>
    </Box>
  );
}
