import PropTypes from 'prop-types';

import logoWhite from '@static/logo-white.svg';
import logoBlue from '@static/logo-blue.svg';

import styles from './Logo.module.css';

const Logo = ({ type }) => {
  let cn;
  switch (type) {
    case 'white':
      type = logoWhite;
      cn = styles.logoWhite;
      break;
    case 'blue':
      type = logoBlue;
      cn = styles.logoBlue;
      break;
    default:
      type = logoBlue;
      cn = styles.logoBlue;
      break;
  }
  return (
    <>
      <img className={cn} src={type} alt="logo" />
    </>
  );
};

Logo.propTypes = {
  type: PropTypes.string,
};

export default Logo;
