import React from 'react';
import cl from './SecondStep.module.css';
import { AdresBloc, BlockTotal, DataRecipient, ListProduct } from '../firstStep/FirstStep';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../../../bll/store';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SecondStep = () => {
  const currentAdres = useSelector<RootStateType, any>((state) => state.order.currentAdres);
  const listSelectedProduct = useSelector<RootStateType, any>((state) => state.order.listSelectedProduct);


  return (
    <div className={cl.bg}>
      <DataRecipient text={'Оплата вашего заказа'} order={'RT3234234234234'} />
      <div className={cl.container}>
        {/*<AdresBloc adres={currentAdres}/>*/}
        <div className={cl.title}>Ваш заказ</div>
        <ListProduct listSelectedProduct={listSelectedProduct} />
      </div>
      <BlockTotal prise={'23 000 $'} delivery={'230 $'} orderPrise={'23 000 $'} />
      <div className={cl.container}>
        <h4 className={cl.btnTitle}>Способ оплаты</h4>
        <div className={cl.btnWrap}>
          <button className={cl.btn}>Внутренний счет</button>
          <button className={cl.btn}>Master Card</button>
          <button className={cl.btn}>VISA</button>
          <button className={cl.btn}>PayPal</button>
          <button className={cl.btn}>ApplePay</button>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
