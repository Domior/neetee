import React, { useState } from 'react';
import cl from './FourStep.module.css';
import { AdresBloc, BlockTotal, DataRecipient, ListProduct } from '../firstStep/FirstStep';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../../../bll/store';
import logo from './../../../../../assets/LOGO-CARGO_02 1.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CargoTracking from '../CargoTracking/CargoTracking';

const FourStep = () => {
  const currentAdres = useSelector<RootStateType, any>((state) => state.order.currentAdres);
  const listSelectedProduct = useSelector<RootStateType, any>((state) => state.order.listSelectedProduct);
  const [active, setActive] = useState('');
  const selectPaymant = (e: any) => {
    console.log('selectPaymant', e.currentTarget.value);
    setActive(e.currentTarget.value);
  };

  return (
    <div className={cl.bg}>
      <DataRecipient text={'Отслеживание посылки'} order={'RT3234234234234'} />
      <div className={cl.container} style={{ paddingTop: '40px' }}>
        <div className={cl.rowLogistic}>
          <div className={cl.logistic}>
            <img src={logo} alt='logo' />
          </div>
          <div className={cl.adresInfo}>
            <AdresBloc adres={currentAdres} bgColor='#fff' />
          </div>
        </div>
        <CargoTracking />


        <div className={cl.title}>Ваш заказ</div>
        <ListProduct listSelectedProduct={listSelectedProduct} />
      </div>
      <BlockTotal prise={'23 000 $'} delivery={'230 $'} orderPrise={'23 000 $'} />
      <div className={cl.container}>
        <h4 className={cl.btnTitle}>Способ оплаты</h4>
        <div className={cl.btnWrap}>
          <button className={`${cl.btn} ${cl.internalAccount}  ${active == 'internalAccount' && cl.active}`}
                  onClick={(e) => selectPaymant(e)} value='internalAccount'>
            Внутренний счет<span />
          </button>
          <button className={`${cl.btn} ${active == 'MasterCard' && cl.active}`}
                  onClick={(e) => selectPaymant(e)} value='MasterCard'>
            Master Card<span />
          </button>
          <button className={`${cl.btn} ${active == 'VISA' && cl.active}`}
                  onClick={(e) => selectPaymant(e)} value='VISA'>
            VISA<span />
          </button>
          <button className={`${cl.btn} ${active == 'PayPal' && cl.active}`}
                  onClick={(e) => selectPaymant(e)} value='PayPal'>
            PayPal<span />
          </button>
          <button className={`${cl.btn} ${active == 'ApplePay' && cl.active}`}
                  onClick={(e) => selectPaymant(e)} value='ApplePay'>
            ApplePay<span />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourStep;


