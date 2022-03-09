import * as React from 'react';
// import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@mui/styles';

import { CSSTransition } from 'react-transition-group';

import useMediaQuery from '@mui/material/useMediaQuery';

import { ReactComponent as MenuButtonIcon } from '@icons/menu.svg';
import { ReactComponent as ArrowIcon } from '@icons/arrow.svg';

import './HeaderSubmenu.module.css';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    height: 'inherit',
    padding: `0 20px`,
    [theme.breakpoints.down('md')]: {
      padding: `0 20px`,
    },
  },
  dropdown: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
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
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      {isMobileScreen && (
        <>
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
        </>
      )}
      {!isMobileScreen && <DropdownMenu />}
    </nav>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = React.useState('main');
  const dropdownRef = React.useRef(null);
  const dropdownItemRef = React.useRef(null);
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();

  function DropdownItem(props) {
    const handleDropdownItemClick = () => {
      if (isMobileScreen) {
        props.goToMenu && setActiveMenu(props.goToMenu);
      }
    };
    const handleDropdownItemHover = (event) => {
      if (!isMobileScreen) {
        if (!event.target.hasAttribute('href')) {
          props.goToMenu && setActiveMenu(props.goToMenu);
          console.log(dropdownItemRef);
        }
      }
    };
    return (
      <a
        href={props.link}
        className={classes.menuItem}
        onClick={handleDropdownItemClick}
        onMouseEnter={handleDropdownItemHover}
        onMouseLeave={() => console.log('unhovered')}
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
        ref={dropdownItemRef}
      >
        <div className={classes.menu}>
          {isMobileScreen && (
            <DropdownItem goToMenu="main">
              <div className={classes.goBackbutton}>
                <ArrowIcon />
                <p>Назад</p>
              </div>
            </DropdownItem>
          )}
          <DropdownItem link={'#'}>Как продавать</DropdownItem>
          <DropdownItem link={'#'}>Как заказать</DropdownItem>
          <DropdownItem link={'#'}>Оплата</DropdownItem>
          <DropdownItem link={'#'}>Доставка</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
