import * as React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

import { CSSTransition } from 'react-transition-group';

import { ReactComponent as MenuButtonIcon } from '@icons/menu2.svg';

import './HeaderSubmenu.module.css';

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     minWidth: 'unset',
//     padding: '0',
//     marginRight: '20px',
//     [theme.breakpoints.down('md')]: {
//       marginRight: '10px',
//     },
//   },
//   icon: {
//     width: '25px',
//     height: '25px',
//     fill: 'none',
//     '& rect': {
//       stroke: theme.colors.gray,
//       transition: `stroke .4s ease-in-out`,
//     },
//     '& path': {
//       fill: theme.colors.gray,
//       transition: `fill .4s ease-in-out`,
//     },
//     '&:hover rect': {
//       stroke: theme.colors.blue,
//       transition: `stroke .4s ease-in-out`,
//     },
//     '&:hover path': {
//       fill: theme.colors.blue,
//       transition: `fill .4s ease-in-out`,
//     },
//     [theme.breakpoints.down('md')]: {
//       width: '20px',
//       height: '20px',
//     },
//   },
//   menu: {
//     marginTop: '20px',
//     [theme.breakpoints.down('md')]: {
//       marginTop: '10px',
//     },
//     '& ul': {
//       backgroundColor: theme.colors.white,
//       border: `2px solid ${theme.palette.primary.secondary}`,
//       borderRadius: '5px',
//       padding: `5px 40px 8px 20px`,
//     },
//     '& ul li': {
//       minHeight: 'unset',
//       fontSize: '14px',
//       lineHeight: '16px',
//       fontWeight: 400,
//       color: theme.colors.black,
//       padding: `10px 40px 10px 20px`,
//       margin: `0 -40px 0 -20px`,
//       transition: `all .5s cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
//     },
//     '& ul li:hover': {
//       backgroundColor: theme.palette.primary.secondary,
//     },
//     '& ul li a': {
//       color: theme.colors.black,
//       textDecoration: 'none',
//     },
//     '& .MuiMenu-paper': {
//       boxShadow: 'none',
//     },
//   },
//   badge: {
//     '& span': {
//       top: '0',
//       right: '-10px',
//       width: '7px',
//       height: '7px',
//       minWidth: 'unset',
//       boxShadow: `0px 2px 4px rgba(252, 44, 44, 0.25)`,
//     },
//   },
// }));

export default function HeaderSubmenu() {
  return (
    <Navbar>
      <NavItem icon="1" />
      <NavItem icon="1" />
      <NavItem icon="1" />

      <NavItem icon="2">
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = React.useState('main');
  const [menuHeight, setMenuHeight] = React.useState(null);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon="<" rightIcon=">" goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem leftIcon="🦧" rightIcon=">" goToMenu="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon="<">HTML</DropdownItem>
          <DropdownItem leftIcon="<">CSS</DropdownItem>
          <DropdownItem leftIcon="<">JavaScript</DropdownItem>
          <DropdownItem leftIcon="<">Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
