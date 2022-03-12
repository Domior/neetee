import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import Logo from '../../static/taobao.svg';
import ItemImg from '../../static/item.jpg';
import Close from '../../static/icons/close.svg';

import styles from './ProductItem.module.css';

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: `18px 40px`,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

const ProductItem = (props) => {
  const { name, title, description, itemPrice } = props.data;
  const classes = useStyles();


  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <img className={styles.cardHeaderLogo} src={Logo} alt="logo" />
        <span className={styles.cardHeaderTitle}>{name}</span>
        <button className={styles.btnClose}>
          <img className={styles.btnCloseIcon} src={Close} alt="close" />
        </button>
      </div>
      <div className={styles.cardBody}>
        <img className={styles.cardItemImg} src={ItemImg} alt="item" />
        <div className={styles.cardItemInfo}>
          <p className={styles.cardItemTitle}>{title}</p>
          <p className={styles.cardItemDescription}>{description}</p>
        </div>
        <div className={styles.cardBodyFooter}>
          <p className={styles.cardItemPrice}>
            <span>Цена</span>
            <span>Итоговая цена</span>
            {itemPrice}
          </p>
          <Button className={classes.btn} variant="contained" color="warning">
            Посмотреть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
