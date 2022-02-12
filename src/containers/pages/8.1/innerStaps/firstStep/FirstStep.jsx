import React, { useEffect, useState } from 'react';
import cl from './FirstStep.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogTitle, List } from '@mui/material';
import { setCurrentAdresAC } from '../../../../../bll/orderReducer';
import { PopupNewAdress } from '../PopupNewAdress/PopupNewAdress';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import UserCard from '../../../../../components/UserCard/UserCard';
import { PopupChangeUserData } from '../PopupChangeUserData/PopupChangeUserData';
import productImg from './../../../../../assets/productImg.jpg';
import message from './../../../../../assets/message.png';
import foto from './../../../../../assets/foto.png';
import save from './../../../../../assets/save.png';
import box from './../../../../../assets/box.png';
import test from './../../../../../assets/test.png';
import delivery from './../../../../../assets/delivery.png';

const FirstStep = () => {
  const dispatch = useDispatch();
  const listUserAdres = useSelector((state) => state.order.listUserAdres);
  const currentAdresFromState = useSelector((state) => state.order.currentAdres);
  const listSelectedProduct = useSelector((state) => state.order.listSelectedProduct);
  const [openAdress, setOpenAdress] = useState(false);
  const [openNewAdress, setOpenNewAdress] = useState(false);
  const [openChangeUserData, setOpenChangeUserData] = useState(false);
  const [currentAdres, setCurrentAdres] = useState(listUserAdres[0]);

  const handleOpen = () => {
    setOpenAdress(true);
  };
  const handleClose = () => {
    setOpenAdress(false);
  };
  const handleOpenNewAdr = () => {
    setOpenNewAdress(true);
  };
  const handleCloseNewAdr = () => {
    setOpenNewAdress(false);
  };
  const handleOpenChangeUserData = () => {
    setOpenChangeUserData(true);
  };
  const handleCloseChangeUserData = () => {
    setOpenChangeUserData(false);
  };
  const handleListItemClick = (i) => {
    console.log(i);
    dispatch(setCurrentAdresAC(i));
    handleClose();
  };
  const removeUser = (i) => {
    console.log(i);
    // dispatch(setCurrentAdresAC(i));
  };
  useEffect(() => {
    currentAdresFromState.id && setCurrentAdres(currentAdresFromState);
  }, [dispatch, currentAdresFromState]);

  const itemsProduct = listSelectedProduct.map((p, i) => {
    return (
      <div key={p.id} className={cl.itemProduct}>
        <span className={cl.i}>{i}</span>
        {/*<img src={p.imgUrl} alt='img' />*/}
        <img src={productImg} alt='img' />
        <div className={cl.itemProductDeck}>
          <p>{p.desc}</p>
          <p className={cl.itemProductColor}>{p.color}</p>
        </div>
        <div className={`${cl.row} ${cl.prRow}`}>
          <div className={`${cl.settingsProduct} ${cl.itemPrStoreName}`}>{p.storeName}</div>
          <div className={`${cl.settingsProduct} ${cl.itemPrPrice}`}>{p.itemPrise}</div>
          <div className={`${cl.settingsProduct} ${cl.itemPrCount}`}>{p.count}</div>
          <div className={`${cl.settingsProduct} ${cl.itemPrDelivery}`}>{p.deliveryPr}</div>
          <div className={`${cl.settingsProduct} ${cl.itemPrComPrice}`}>{p.totalPr}</div>
          <div className={`${cl.settingsProduct} ${cl.itemPrAdditional} ${cl.wrBtnAdditional}`}>
            <button><img src={message} alt='message' /></button>
            <button><img src={foto} alt='message' /></button>
            <button><img src={save} alt='message' /></button>
            <button><img src={box} alt='message' /></button>
            <button><img src={test} alt='test' /></button>
            <button><img src={delivery} alt='delivery' /></button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={cl.bg}>
      <DataRecipient text={'Укажите данные получателя'} order={'RT3234234234234'} />
      <div className={cl.container}>
        <div className={cl.btnWrap}>
          <Button onClick={handleOpen} className={cl.btn}>
            выбрать адрес
          </Button>
          <Button
            onClick={handleOpenNewAdr}
            className={`${cl.btn} ${cl.btnGreen}`}
          >
            создать адрес
          </Button>
          <Button
            onClick={handleOpenChangeUserData}
            className={`${cl.btn} ${cl.btnOrange}`}
          >
            редактировать
          </Button>
          <div className={cl.rowBtnInfo}>
            <InfoOutlinedIcon className={cl.btnInfoIcon} />
            <p className={cl.btnInfo}>
              Выберите получателя из ранее сохраненных, чтобы увидеть его
              контактные данные и адрес получения. Или создайте нового
              получателя, нажав кнопку “Создать”.
            </p>
          </div>
        </div>
        <div>
          {currentAdres ? (
            <div className={cl.currentAdres}>
              <div>
                <p className={cl.formTitle}>ФИО</p>
                <p>
                  {currentAdres.firstName} {currentAdres.lastName}
                </p>
                <div className={cl.sotialBlock}>
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                  <TwitterIcon />
                </div>
              </div>
              <div>
                <p className={cl.formTitle}>Номер телефона</p>
                <p>{currentAdres.phone}</p>
                <p className={cl.formTitle}>E-mail</p>
                <p>{currentAdres.email}</p>
              </div>
              <div>
                <p className={cl.formTitle}>
                  Индекс <span> Страна, город</span>
                </p>
                <p>
                  {currentAdres.index}
                  <span>
                    {currentAdres.country}
                    {currentAdres.town}
                  </span>
                </p>
                <p className={cl.formTitle}>Адрес получателя</p>
                <p>{currentAdres.adres}</p>
              </div>
              <div>
                <p className={cl.formTitle}>Название компании</p>
                <p>{currentAdres.companyName}</p>
                <p className={cl.formTitle}>ИНН</p>
                <p>{currentAdres.inn}</p>
              </div>
            </div>
          ) : (
            <div className={cl.blockAdr}>нет доступных адресов</div>
          )}
        </div>
        <div className={cl.title}>Ваш заказ</div>
        <div className={cl.row}>
          <div style={{ display: 'flex' }}>
            <InfoOutlinedIcon className={cl.btnInfoIcon} />
            <p className={cl.infoSettings}>
              Выберите дополнительные услуги, которые предоставит карго,
              отправляющее товар в вашу страну. Нажмите на иконки справа от
              цены, чтобы выбрать услуги.
            </p>
          </div>
          <div className={`${cl.row} ${cl.expansive}`}>
            <span className={`${cl.settingsProduct} ${cl.itemPrStoreName}`}>Магазин</span>
            <span className={`${cl.settingsProduct} ${cl.itemPrPrice}`}>Цена за единицу</span>
            <span className={`${cl.settingsProduct} ${cl.itemPrCount}`}>Кол-во</span>
            <span className={`${cl.settingsProduct} ${cl.itemPrDelivery}`}>Достав-ка</span>
            <span className={`${cl.settingsProduct} ${cl.itemPrComPrice}`}>Общая сумма</span>
            <span className={`${cl.settingsProduct} ${cl.itemPrAdditional}`}>Дополнительные услуги</span>
          </div>
        </div>
        <div className={cl.productsWrap}>{itemsProduct}</div>
      </div>
      <BlockTotal prise={'23 000 $'} delivery={'230 $'} orderPrise={'23 000 $'}/>

      <Dialog open={openAdress} onClose={handleClose}>
        <DialogTitle>Выберите адрес</DialogTitle>
        <List sx={{ pt: 0 }}>
          {listUserAdres.map((i) => (
            <UserCard
              key={i.id}
              user={i}
              selectUser={handleListItemClick}
              removeUser={removeUser}
            />
          ))}
        </List>
      </Dialog>
      <PopupNewAdress open={openNewAdress} handleClose={handleCloseNewAdr} />
      <PopupChangeUserData
        open={openChangeUserData}
        handleClose={handleCloseChangeUserData}
      />
    </div>
  );
};

export default FirstStep;

export const DataRecipient = ({ text, order }) => {
  return (
    <div className={cl.dataRecipient}>
      <p className={cl.dataRecipientDesc}>{text}</p>
      <p className={cl.orderDesc}>
        Номер заказа
        <span className={cl.order}>{order}</span>
      </p>
    </div>
  );
};
export const BlockTotal = ({ prise,delivery, orderPrise }) => {
  return (
    <div className={cl.blockTotal}>
      <div className={cl.container}>
        <div className={cl.left}>
          <div  className={cl.row}>
            <p>Стоимость товаров</p>
            <span>{prise}</span>
          </div>
          <div  className={cl.row}>
            <p>Стоимость доставки </p>
            <span>{delivery}</span>
          </div>


        </div>
        <div className={cl.right}>
          <p>Итоговая сумма к оплате</p>
          <span>{orderPrise}</span>
        </div>
      </div>
    </div>
  );
};
