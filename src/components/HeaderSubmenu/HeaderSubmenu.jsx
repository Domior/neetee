import * as React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { CSSTransition } from 'react-transition-group';

import { ReactComponent as MenuButtonIcon } from '@icons/menu.svg';
import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';

import './HeaderSubmenu.module.css';

export const MenuItems = [
  {
    title: 'Marketing',
    path: '/',
    cName: 'dropdownLink',
  },
  {
    title: 'Consulting',
    path: '/',
    cName: 'dropdownLink',
  },
  {
    title: 'Design',
    path: '/',
    cName: 'dropdownLink',
  },
  {
    title: 'Development',
    path: '/',
    cName: 'dropdownLink',
  },
];

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: 'relative',
    height: 'inherit',
    padding: `0 20px`,
  },
  navbarNav: {
    maxWidth: '100%',
    height: 'inherit',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: '29px',
    left: 0,
    zIndex: 100,
    width: '100%',
    maxHeight: '180px',
    overflowY: 'auto',
    backgroundColor: '#C4C4C4',
    transition: `height .5s ease`,
    padding: `0 0 20px`,
  },
  menu: {
    width: '100%',
  },

  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: ' 16px',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
  },

  menuIcon: {
    '& svg, path': {
      fill: '#666',
    },
  },
  goBackbutton: {
    width: '100%',
    marginLeft: `20px`,
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#4270AD',
    '& svg': {
      width: '12px',
      height: '6px',
      marginRight: '3px',
      transform: 'rotate(90deg)',
    },
    '& svg path': {
      stroke: '#4270AD',
    },
  },
}));

export default function HeaderSubmenu() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const [click, setClick] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (e) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = (e) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return !isMobileScreen ? (
    <>
      <nav className="navbar">
        <div
          className={click ? 'menuIcon active' : 'menuIcon'}
          onClick={handleClick}
        >
          <MenuButtonIcon />
        </div>
        <ul className={click ? 'navMenu active' : 'navMenu'}>
          <li className="navItem">
            <Link to="/" className="navLinks" onClick={closeMobileMenu}>
              Помощь
            </Link>
          </li>
          <li className="navItem" onMouseEnter={onMouseEnter}>
            <Link to="/" className="navLinks" onClick={closeMobileMenu}>
              Партнерство
            </Link>
            {dropdown && (
              <>
                <ul
                  onMouseLeave={onMouseLeave}
                  onClick={handleClick}
                  className={click ? 'dropdownMenu clicked' : 'dropdownMenu'}
                >
                  {MenuItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className={item.cName}
                          to={item.path}
                          onClick={() => setClick(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </li>
          <li className="navItem">
            <Link to="/" className="navLinks" onClick={closeMobileMenu}>
              Статьи и новости
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLinks" onClick={closeMobileMenu}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </>
  ) : (
    <nav className={classes.navbar}>
      <ul className={classes.navbarNav}>
        <li className={classes.navItem}>
          <a
            className={classes.menuIcon}
            href="#/"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <MenuButtonIcon />
            ) : (
              <MenuButtonIcon style={{ transform: 'rotate(180deg)' }} />
            )}
          </a>
          {open && <DropdownMenu />}
        </li>
      </ul>
    </nav>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = React.useState('main');
  const dropdownRef = React.useRef(null);
  const classes = useStyles();

  function DropdownItem(props) {
    return (
      <a
        href={props.link}
        className={classes.menuItem}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </a>
    );
  }

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className={classes.menu}>
          <DropdownItem goToMenu="help">Помощь</DropdownItem>
          <DropdownItem link={'#'}>Партнерство</DropdownItem>
          <DropdownItem link={'#'}>Статьи и новости</DropdownItem>
          <DropdownItem link={'#'}>Контакты</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'help'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className={classes.menu}>
          <DropdownItem goToMenu="main">
            <div className={classes.goBackbutton}>
              <ArrowIcon />
              <p>Назад</p>
            </div>
          </DropdownItem>
          <DropdownItem link={'#'}>Как продавать</DropdownItem>
          <DropdownItem link={'#'}>Как заказать</DropdownItem>
          <DropdownItem link={'#'}>Оплата</DropdownItem>
          <DropdownItem link={'#'}>Доставка</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
