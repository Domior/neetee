import React, { useState } from 'react';
import cl from './FourStep.module.css';
import { AdresBloc, BlockTotal, DataRecipient, ListProduct } from '../firstStep/FirstStep';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../../../bll/store';
import logo from './../../../../../assets/LOGO-CARGO_02 1.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CargoTracking from '../CargoTracking/CargoTracking';

const steps = [
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Заказ оформлен',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Заказ оплачен',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Посылка отправлена в международную перевозку ',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Посылка получена в пункте отправки и ждет оплаты за перевозку ',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Перевозка оплачена. Оценочное время доставки ',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Посылка прибыла в пункт выдачи ',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Получение подтверждено ',
  },
];
const stepsL = [
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Заказ оформлен',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Заказ оплачен',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Посылка отправлена в международную перевозку ',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Посылка прибыла в пункт выдачи ',
  },
  {
    label: '2019-01-12',
    time: '13.45',
    description: 'Получение подтверждено ',
  },
];


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
          <div className={cl.logisticWr}>
            <h4>Логистика</h4>
            <div className={cl.logistic}>
              <img src={logo} alt='logo' />
            </div>
          </div>
          <div className={cl.adresInfo}>
            <h4>Информация о получателе</h4>
            <AdresBloc adres={currentAdres} bgColor='#fff' />
          </div>
        </div>
        <h3 className={cl.delText}>Информация о получении груза </h3>
        <CargoTracking trackNumber={['HTL 25789-02-2-4', 'HTL 25789-02-2-3']}
                       deliveryAddress={'Россия, Москва, Проспект мира, 35'}
                       deliveryType={'plain'} phone={'+79993338888'} steps={steps}
                       delivered='Ваш груз прибыл, подтвердите получение и оставьте отзыв о товаре.' />
        <CargoTracking trackNumber={['HTL 25789-02-2-2', 'HTL 25789-02-2-3']}
                       deliveryAddress={'Россия, Москва, Проспект мира, 35'}
                       deliveryType={'vehicle'} phone={'+79993344888'} steps={steps}
                       someInfo={['HTL 25789-02-2-4 - прибыл в пункт выдачи.', 'HTL 25789-02-2-3 - в пути']} />

        <div className={cl.title}>Ваш заказ</div>
        <ListProduct listSelectedProduct={listSelectedProduct} />
      </div>
      <BlockTotal prise={'23 000 $'} delivery={'230 $'} orderPrise={'23 000 $'} />
    </div>
  );
};

export default FourStep;


