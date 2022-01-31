import MenuNav from '@components/Menu/MenuNav';
import Logo from '@components/Logo';
import personPhoto from '@static/person-photo.jpg';

import styles from './Menu.module.css';

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <Logo />
        <img className={styles.pesonPhoto} src={personPhoto} alt="person" />
        <p className={styles.pesonName}>Иванов Сергей</p>
        <MenuNav />
      </div>
    </>
  );
};

export default Menu;
