import { NavLink } from 'react-router-dom';

import IconAnnouncements from '@icons/announcements.svg';
import IconOrders from '@icons/orders.svg';
import IconFavourites from '@icons/favourites.svg';
import IconSettings from '@icons/settings.svg';

import styles from './DrawerMenuNav.module.css';

const DrawerMenuNav = () => {
  return (
    <>
      <ul className={styles.menuNav}>
        <li>
          <NavLink to="/my-announcements">
            <img src={IconAnnouncements} alt="IconAnnouncements" />
            <span>Мои объявления</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <img src={IconOrders} alt="IconOrders" />
            <span>Мои заказы</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourites">
            <img src={IconFavourites} alt="IconFavourites" />
            <span>Избранное</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <img src={IconSettings} alt="IconSettings" />
            <span>Настройки</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default DrawerMenuNav;
