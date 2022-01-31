import { NavLink } from 'react-router-dom';

import IconAnnouncements from '@icons/announcements.svg';
import IconOrders from '@icons/orders.svg';
import IconFavourites from '@icons/favourites.svg';
import IconSettings from '@icons/settings.svg';

import styles from './MenuNav.module.css';

const MenuNav = () => {
  return (
    <>
      <ul className={styles.menuNav}>
        <li className={styles.menuLink_container}>
          <NavLink className={styles.menuLink} to="/my-announcements">
            <img src={IconAnnouncements} alt="IconAnnouncements" />
            <span>Мои объявления</span>
          </NavLink>
        </li>
        <li className={styles.menuLink_container}>
          <NavLink className={styles.menuLink} to="/orders">
            <img src={IconOrders} alt="IconOrders" />
            <span>Мои заказы</span>
          </NavLink>
        </li>
        <li className={styles.menuLink_container}>
          <NavLink className={styles.menuLink} to="/favourites">
            <img src={IconFavourites} alt="IconFavourites" />
            <span>Избранное</span>
          </NavLink>
        </li>
        <li className={styles.menuLink_container}>
          <NavLink className={styles.menuLink} to="/settings">
            <img src={IconSettings} alt="IconSettings" />
            <span>Настройки</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MenuNav;
