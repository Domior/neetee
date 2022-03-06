import * as React from 'react';

import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import Logo from '../../static/taobao.svg';
import ItemImg from '../../static/item.jpg';
import Close from '../../static/icons/close.svg';

import { makeStyles, useTheme } from '@mui/styles';
import styles from './ProductItemMain.module.css';

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
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      order: 0,
      marginBottom: '10px',
    },
    '& p': {
      fontSize: '16px',
      lineHeight: '19px',
      fontWeight: '400',
      color: theme.colors.black,
      marginRight: '10px',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  },
  statusBadge: {
    fontSize: '18px',
    lineHeight: '21px',
    fontWeight: '400',
    height: 'unset',
    minWidth: '145px',
    padding: `3px 8px`,
    color: theme.colors.white,
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
      lineHeight: '14px',
      minWidth: '100px',
      padding: `3px 5px`,
    },
    '& span': {
      padding: '0',
    },
  },
  btn: {
    padding: `18px 40px`,
    order: 4,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: '0',
    },
  },
}));

const ProductItemMain = (props) => {
  // const { name, title, description, itemPrice, deliveryPrice, totalPrice } =
  //   props.data;
  const theme = useTheme();
  const classes = useStyles();

  let statusLabel;
  let statusColor;

  switch (props.status) {
    case 'waitingShipping':
      statusLabel = 'Ждет отправки';
      statusColor = theme.palette.info.gray;
      break;
    case 'declined':
      statusLabel = 'Отменено';
      statusColor = theme.palette.info.red;
      break;
    case 'sent':
      statusLabel = 'Отправлено';
      statusColor = theme.palette.info.green;
      break;
    case 'completed':
      statusLabel = 'Завершено';
      statusColor = theme.palette.info.blue;
      break;
    case 'waitingAssembly':
      statusLabel = 'Ждет сборки';
      statusColor = theme.palette.info.brown;
      break;
    case 'ontheWay':
      statusLabel = 'В пути';
      statusColor = theme.palette.info.yellow;
      break;
    case 'payItem':
      statusLabel = 'Оплатите товар';
      statusColor = theme.palette.info.blue;
      break;
    case 'payDelivery':
      statusLabel = 'Оплатите доставку';
      statusColor = theme.palette.info.green;
      break;
    default:
      statusLabel = 'Завершено';
      statusColor = theme.palette.info.blue;
      // statusLabel = 'Неопределён';
      // statusColor = theme.palette.info.gray;
      break;
  }

  return (
    <div className={classes.cardContainerBlock}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderTitleContainer}>
            <img className={styles.cardHeaderLogo} src={Logo} alt="logo" />
            <span className={styles.cardHeaderTitle}>RT3234234234234</span>
          </div>
          <div className={classes.statusContainer}>
            <p>Статус:</p>
            <Chip
              className={classes.statusBadge}
              label={statusLabel}
              style={{ backgroundColor: `${statusColor}` }}
            />
          </div>
          <button className={styles.btnClose}>
            <img className={styles.btnCloseIcon} src={Close} alt="close" />
          </button>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.test}>
            <img className={styles.cardItemImg} src={ItemImg} alt="item" />
            <div className={styles.cardItemTitleContainerSm}>
              <p className={styles.cardItemTitle}>
                2021 новый предмет baotou тапочки женские летние за тапочки
                женские...
              </p>
              <p className={styles.cardItemDescription}>
                Россия, Москва, Проспект мира, 125, кв 426, 223344
              </p>
            </div>
          </div>
          <div className={styles.cardItemInfo}>
            <div className={styles.cardItemTitleContainerLg}>
              <p className={styles.cardItemTitle}>
                2021 новый предмет baotou тапочки женские летние за тапочки
                женские...
              </p>
              <p className={styles.cardItemDescription}>
                Россия, Москва, Проспект мира, 125, кв 426, 223344
              </p>
            </div>
            <div className={styles.cardBodyFooter}>
              <p className={styles.cardItemPrice}>
                <span>Количество</span>
                123
              </p>
              <p className={styles.cardItemPrice}>
                <span>Цена за единицу</span>
                123
              </p>
              <p className={styles.cardItemPrice}>
                <span>Доставка по Китаю</span>
                123
              </p>
              <p className={styles.cardItemPrice}>
                <span>Итоговая цена</span>
                123
              </p>
              <Button
                className={classes.btn}
                variant="contained"
                color="warning"
              >
                Оплатить заказ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemMain;
