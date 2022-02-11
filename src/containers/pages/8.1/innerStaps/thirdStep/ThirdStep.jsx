import React, { useEffect, useState } from 'react';
import cl from './ThirdStep.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogTitle, List } from '@mui/material';
import { setCurrentAdresAC } from '../../../../../bll/orderReducer';
import productImg from './../../../../../assets/productImg.jpg';
import { PopupNewAdress } from '../PopupNewAdress/PopupNewAdress';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import UserCard from '../../../../../components/UserCard/UserCard';
import { PopupChangeUserData } from '../PopupChangeUserData/PopupChangeUserData';
import {
  Box, InputLabel, MenuItem, Select, Tab, Tabs, SelectChangeEvent,
  FormControl, Checkbox, FormControlLabel,
} from '@mui/material';
import plain from './../../../../../assets/plain.png';
import boult from './../../../../../assets/boult.png';

const ThirdStep = () => {
  const dispatch = useDispatch();
  const listUserAdres = useSelector(state => state.order.listUserAdres);
  const currentAdresFromState = useSelector(state => state.order.currentAdres);
  const listSelectedProduct = useSelector(state => state.order.listSelectedProduct);
  const [openAdress, setOpenAdress] = useState(false);
  const [openNewAdress, setOpenNewAdress] = useState(false);
  const [openChangeUserData, setOpenChangeUserData] = useState(false);
  const [currentAdres, setCurrentAdres] = useState(listUserAdres[0]);
  const [country, setCountry] = useState('');
  const [town, setTown] = useState('');

  const handleChangeTown = (event: SelectChangeEvent) => {
    setTown(event.target.value);
  };
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };
  useEffect(() => {
    currentAdresFromState.id && setCurrentAdres(currentAdresFromState);
  }, [dispatch, currentAdresFromState]);

  const itemsProduct = listSelectedProduct.map((p, i) => {
    return <div key={p.id} className={cl.itemProduct}>
      <span className={cl.i}>{i}</span>
      {/*<img src={p.imgUrl} alt='img' />*/}
      <img src={productImg} alt='img' />
      <div>
        <p>{p.desc}</p>
        <p>{p.color}</p>
      </div>
      <div>{p.storeName}</div>
      <div>{p.itemPrise}</div>
      <div>{p.count}</div>
      <div>{p.deliveryPr}</div>
      <div>{p.totalPr}</div>
    </div>;
  });

  return (
    <div className={cl.bg}>
      <div className={cl.dataRecipient}>
        <p className={cl.dataRecipientDesc}>
          Выберите способ доставки
        </p>
        <p className={cl.orderDesc}>
          Номер заказа
          <span className={cl.order}>
              RT3234234234234
          </span>
        </p>
      </div>

      <div className={cl.container}>
        <h3 className={cl.settingsTitle}>Найстройки поиска логистических компаний</h3>
        <div>
          <div className={cl.settingsBlock}>
            <div className={`${cl.selectWrap} ${cl.txt}`}>
              <p className={cl.selectInfo}>Направление</p>
            </div>
            <div className={`${cl.selectWrap} ${cl.get}`}>
              <p className={cl.selectInfo}>Отправка</p>
              <div className={cl.row}>
                <FormControl className={cl.select}>
                  <InputLabel id='demo-simple-select-label'>Город*</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={town} label='Город*'
                          onChange={handleChangeTown}>
                    <MenuItem value={'Москва'}>Москва</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={cl.select}>
                  <InputLabel id='demo-simple-select-label'>Город*</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={town} label='Город*'
                          onChange={handleChangeTown}>
                    <MenuItem value={'Москва'}>Москва</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={`${cl.selectWrap} ${cl.set}`}>
              <p className={cl.selectInfo}>Получение</p>
              <div className={cl.row}>
                <FormControl className={cl.select}>
                  <InputLabel id='demo-simple-select-label'>Страна*</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={country} label='Страна*'
                          onChange={handleChangeCountry}>
                    <MenuItem value={'Россия'}>Россия</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={cl.select}>
                  <InputLabel id='demo-simple-select-label'>Город*</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={town} label='Город*'
                          onChange={handleChangeTown}>
                    <MenuItem value={'Москва'}>Москва</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className={cl.typeDelivery}>
            <p className={cl.selectInfo}>Направление</p>
            <div className={cl.settinsBtnWrap}>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={plain} alt='Авиа' /></span>
                <span>Авиа</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={boult} alt='' /></span>
                <span>Море</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={boult} alt='Ж/Д' /></span>
                <span>Ж/Д</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={boult} alt='Авто' /></span>
                <span>Авто</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={plain} alt='Авиаэкспресс' /></span>
                <span>Авиаэкспресс</span>
              </button>
            </div>
            <button>применить фильтр</button>
          </div>
        </div>
        {/*<div className={cl.title}>Ваш заказ</div>*/}
        {/*<div className={cl.row}>*/}
        {/*  <div style={{display: 'flex'}}>*/}
        {/*    <InfoOutlinedIcon className={cl.btnInfoIcon} />*/}
        {/*    <p className={cl.infoSettings}>Выберите дополнительные услуги, которые предоставит карго, отправляющее товар в вашу страну. Нажмите на*/}
        {/*      иконки справа от цены, чтобы выбрать услуги.</p>*/}
        {/*  </div>*/}
        {/*  <div className={cl.row}>*/}
        {/*    <span className={cl.settingsProduct}>Магазин</span>*/}
        {/*    <span className={cl.settingsProduct}>Цена за единицу</span>*/}
        {/*    <span className={cl.settingsProduct}>Кол-во</span>*/}
        {/*    <span className={cl.settingsProduct}>Достав-ка</span>*/}
        {/*    <span className={cl.settingsProduct}>Общая сумма</span>*/}
        {/*    <span className={cl.settingsProduct}>Дополнительные услуги</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={cl.productsWrap}>*/}
        {/*  {itemsProduct}*/}
        {/*</div>*/}
      </div>
      <div className={cl.blockTotal}>
        <div className={cl.left}>
          <p>Стоимость товаров <span>23 000 $</span></p>
          <p>Стоимость доставки <span>230 $</span></p>
        </div>
        <div className={cl.right}>
          <p>Итоговая сумма к оплате</p><span>23 000 $</span>
        </div>
      </div>
      {/*<Dialog open={openAdress} onClose={handleClose}>*/}
      {/*  <DialogTitle>Выберите адрес</DialogTitle>*/}
      {/*  <List sx={{ pt: 0 }}>*/}
      {/*    {listUserAdres.map((i) => (*/}
      {/*      <UserCard key={i.id} user={i} selectUser={handleListItemClick} removeUser={removeUser}/>*/}
      {/*    ))}*/}
      {/*  </List>*/}
      {/*</Dialog>*/}
    </div>
  );
};

export default ThirdStep;


