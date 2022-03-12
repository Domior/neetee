import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';

import Counter from '@components/Counter/Counter';

import Logo from '../../static/taobao.svg';
import ItemImg from '../../static/item.jpg';
import Close from '../../static/icons/close.svg';

import { makeStyles } from '@mui/styles';
import styles from './ProductItemCheckbox.module.css';

const useStyles = makeStyles((theme) => ({
  cardContainerBlock: {
    position: 'relative',
    marginBottom: '30px',
    '&:last-of-type': {
      marginBottom: '0',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
    },
  },
  checkboxContainer: {
    position: 'absolute',
    padding: '0',
    margin: `160px 0 0 20px`,
    '& svg': {
      width: '16px',
      height: '16px',
    },
    [theme.breakpoints.down('md')]: {
      margin: `95px 0 0 10px`,
    },
  },
}));

const ProductItemCheckbox = (props) => {
  const [checked, setChecked] = React.useState(false);
  const [checkedColor, setcheckedColor] = React.useState('');
  const { name, title, description, itemPrice, deliveryPrice, totalPrice } =
    props.data;

  const classes = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    event.target.checked ? setcheckedColor('#F9CB38') : setcheckedColor('');
  };

  return (
    <div className={classes.cardContainerBlock}>
      <Checkbox
        className={classes.checkboxContainer}
        checked={checked}
        onChange={handleChange}
        sx={{
          color: '#F9CB38',
          '&.Mui-checked': {
            color: '#F9CB38',
          },
        }}
      />
      <div
        style={{ borderColor: `${checkedColor}` }}
        className={styles.cardContainer}
      >
        <div
          style={{ backgroundColor: `${checkedColor}` }}
          className={styles.cardHeader}
        >
          <img className={styles.cardHeaderLogo} src={Logo} alt="logo" />
          <span className={styles.cardHeaderTitle}>{name}</span>
          <button className={styles.btnClose}>
            <img className={styles.btnCloseIcon} src={Close} alt="close" />
          </button>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.test}>
            <img className={styles.cardItemImg} src={ItemImg} alt="item" />
            <div className={styles.cardItemTitleContainerSm}>
              <p className={styles.cardItemTitle}>{title}</p>
              <p className={styles.cardItemDescription}>{description}</p>
            </div>
          </div>
          <div className={styles.cardItemInfo}>
            <div className={styles.cardItemTitleContainerLg}>
              <p className={styles.cardItemTitle}>{title}</p>
              <p className={styles.cardItemDescription}>{description}</p>
            </div>
            <div className={styles.cardBodyFooter}>
              <div className={styles.counterContainer}>
                <Counter />
              </div>

              <p className={styles.cardItemPrice}>
                <span>Цена за единицу</span>
                {itemPrice}
              </p>
              <p className={styles.cardItemPrice}>
                <span>Доставка по Китаю</span>
                {deliveryPrice}
              </p>
              <p className={styles.cardItemPrice}>
                <span>Итоговая цена</span>
                {totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCheckbox;
