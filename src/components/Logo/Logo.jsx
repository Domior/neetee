import logo from '@static/logo.svg';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
    </>
  );
};

export default Logo;
