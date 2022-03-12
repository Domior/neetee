import * as React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

import { ReactComponent as MenuButtonIcon } from '@icons/menu2.svg';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    minWidth: 'unset',
    padding: '0',
    marginRight: '20px',
    [theme.breakpoints.down('md')]: {
      marginRight: '10px',
    },
  },
  icon: {
    width: '25px',
    height: '25px',
    fill: 'none',
    '& rect': {
      stroke: theme.colors.gray,
      transition: `stroke .4s ease-in-out`,
    },
    '& path': {
      fill: theme.colors.gray,
      transition: `fill .4s ease-in-out`,
    },
    '&:hover rect': {
      stroke: theme.colors.blue,
      transition: `stroke .4s ease-in-out`,
    },
    '&:hover path': {
      fill: theme.colors.blue,
      transition: `fill .4s ease-in-out`,
    },
    [theme.breakpoints.down('md')]: {
      width: '20px',
      height: '20px',
    },
  },
  menu: {
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
    },
    '& ul': {
      backgroundColor: theme.colors.white,
      border: `2px solid ${theme.palette.primary.secondary}`,
      borderRadius: '5px',
      padding: `5px 40px 8px 20px`,
    },
    '& ul li': {
      minHeight: 'unset',
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: 400,
      color: theme.colors.black,
      padding: `10px 40px 10px 20px`,
      margin: `0 -40px 0 -20px`,
      transition: `all .5s cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    },
    '& ul li:hover': {
      backgroundColor: theme.palette.primary.secondary,
    },
    '& ul li a': {
      color: theme.colors.black,
      textDecoration: 'none',
    },
    '& .MuiMenu-paper': {
      boxShadow: 'none',
    },
  },
  badge: {
    '& span': {
      top: '0',
      right: '-10px',
      width: '7px',
      height: '7px',
      minWidth: 'unset',
      boxShadow: `0px 2px 4px rgba(252, 44, 44, 0.25)`,
    },
  },
}));

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.menuButton}
        id="menu-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuButtonIcon className={classes.icon} />
      </Button>
      <Menu
        className={classes.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem className={classes.menuItem}>
          <Link onClick={handleClose} to="/">
            <Badge
              className={classes.badge}
              color="error"
              badgeContent=" "
              variant="dot"
            >
              Сообщения
            </Badge>
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link onClick={handleClose} to="/orders">
            Заказы
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link onClick={handleClose} to="/">
            Объявления
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link onClick={handleClose} to="/">
            Избранное
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link onClick={handleClose} to="/">
            Настройки
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link onClick={handleClose} to="/">
            Выйти
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
