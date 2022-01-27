import { NavLink } from 'react-router-dom';

// import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/viewed">Viewed</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
