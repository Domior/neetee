import { Link } from 'react-router-dom';

// import styles from './Header.module.css';

// const Header = () => {
//   return (
//     <div>
//       <ul className={styles.headerNav}>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/my-announcements">MyAnnouncementsPage</NavLink>
//         </li>
//         <li>
//           <NavLink to="/orders">OrdersPage</NavLink>
//         </li>
//         <li>
//           <NavLink to="/favourites">FavouritesPage</NavLink>
//         </li>
//         <li>
//           <NavLink to="/settings">SettingsPage</NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;

import * as React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Logo from '@components/Logo';

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
  authBtns: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiButton-text': {
      marginRight: '10px',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'normal',
      justifyContent: 'center',
      '& .MuiButton-text': {
        order: '1',
        marginTop: '10px',
        marginRight: '0',
      },
    },
  },
  headerIcon: {
    width: '24px',
    height: '24px',
    fill: theme.colors.gray,
    marginRight: '20px',
    '&:last-of-type': {
      marginRight: '0',
    },
    '&:hover': {
      fill: theme.colors.blue,
    },
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center',
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
            <Box className={classes.authBtns}>
              {logined ? (
                <Box className={classes.headerIcons}>
                  <Link to="/"></Link>
                  <Link to="/"></Link>
                  <Link to="/"></Link>
                </Box>
              ) : (
                <>
                  <Button variant="text" color="secondary">
                    Регистрация
                  </Button>
                  <Button variant="contained" color="warning">
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
