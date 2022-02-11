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

const ProductItem = () => {
  const classes = useStyles();

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <img className={styles.cardHeaderLogo} src={Logo} alt="logo" />
        <span className={styles.cardHeaderTitle}>揭阳市生生模具器有限公司</span>
        <button className={styles.btnClose}>
          <img className={styles.btnCloseIcon} src={Close} alt="close" />
        </button>
      </div>
      <div className={styles.cardBody}>
        <img className={styles.cardItemImg} src={ItemImg} alt="item" />
        <div className={styles.cardItemInfo}>
          <p className={styles.cardItemTitle}>
            2021 новый предмет baotou тапочки женские летние за тапочки
            женские...
          </p>
          <p className={styles.cardItemDescription}>
            2021 новый предмет baotou тапочки женские летние за тапочки
            женские...
          </p>
        </div>
        <div className={styles.cardBodyFooter}>
          <p className={styles.cardItemPrice}>
            <span>Цена</span>
            <span>Итоговая цена</span>60000 $
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
