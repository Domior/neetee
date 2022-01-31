import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <ul className={styles.headerNav}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/my-announcements">MyAnnouncementsPage</NavLink>
        </li>
        <li>
          <NavLink to="/orders">OrdersPage</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">FavouritesPage</NavLink>
        </li>
        <li>
          <NavLink to="/settings">SettingsPage</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
