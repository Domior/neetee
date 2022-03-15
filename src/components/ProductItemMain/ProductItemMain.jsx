import * as React from 'react';

import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import ToMessageButton from '@components/Buttons/ToMessageButton';

import Logo from '../../static/taobao.svg';
import ItemImg from '../../static/item.jpg';
import Close from '../../static/icons/close.svg';

import { makeStyles, useTheme } from '@mui/styles';

import styles from './ProductItemMain.module.css';

const useStyles = makeStyles((theme) => ({
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
    padding: `16px 40px`,
    order: 4,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: '0',
    },
  },
}));

const ProductItemMain = (props) => {
  const { type } = props;

  const {
    name,
    title,
    description,
    trackNumber,
    deliveryCompany,
    itemPrice,
    quantity,
    deliveryThroughChina,
    totalPrice,
  } = props.data;

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
    <div className={styles.cardContainerBlock}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderTitleContainer}>
            <img className={styles.cardHeaderLogo} src={Logo} alt="logo" />
            <span className={styles.cardHeaderTitle}>{name}</span>
          </div>
          {!(type === 'viewed' || type === 'favourites') && (
            <div className={classes.statusContainer}>
              <p>Статус:</p>
              <Chip
                className={classes.statusBadge}
                label={statusLabel}
                style={{ backgroundColor: `${statusColor}` }}
              />
            </div>
          )}

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
            {type === 'withTracker' && (
              <div className={styles.cardItemDeliveryContainer}>
                <div className={styles.cardItemDeliveryInfo}>
                  <p>Трек-номер:</p>
                  <span>{trackNumber}</span>
                </div>
                <div className={styles.cardItemDeliveryInfo}>
                  <p>Компания доставки:</p>
                  <span>{deliveryCompany}</span>
                </div>
              </div>
            )}

            <div
              className={`
                ${styles.cardBodyFooter}
                ${
                  type === 'waitingPayment'
                    ? styles.cardBodyFooterWaitingPayment
                    : ''
                }
                ${
                  type === 'withTracker' ? styles.cardBodyFooterWithTracker : ''
                }
                ${type === 'finished' ? styles.cardBodyFooterFinished : ''}
              `}
            >
              {type === 'waitingPayment' && (
                <>
                  <p className={styles.cardItemPrice}>
                    <span>Количество</span>
                    {quantity}
                  </p>
                  <p className={styles.cardItemPrice}>
                    <span>Цена за единицу</span>
                    {itemPrice}
                  </p>
                  <p className={styles.cardItemPrice}>
                    <span>Доставка по Китаю</span>
                    {deliveryThroughChina}
                  </p>
                  <p className={styles.cardItemPrice}>
                    <span>Итоговая цена</span>
                    {totalPrice}
                  </p>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="warning"
                  >
                    Оплатить заказ
                  </Button>
                </>
              )}

              {type === 'withTracker' && (
                <div className={styles.btnsContainer}>
                  <ToMessageButton />
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="warning"
                  >
                    Перейти к заказу
                  </Button>
                </div>
              )}

              {(type === 'viewed' ||
                type === 'favourites' ||
                type === 'waitingRecieve' ||
                type === 'finished') && (
                <>
                  <p className={styles.cardItemPrice}>
                    <span>Цена за единицу</span>
                    {itemPrice}
                  </p>
                  <div className={styles.btnsContainer}>
                    {type === 'finished' && (
                      <Button
                        className={classes.btn}
                        variant="contained"
                        color="success"
                      >
                        Оставить отзыв
                      </Button>
                    )}
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="warning"
                    >
                      Перейти к заказу
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemMain;
