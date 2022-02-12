import React, { useEffect, useState } from 'react';
import cl from './ThirdStep.module.css';
import { useDispatch, useSelector } from 'react-redux';
import productImg from './../../../../../assets/productImg.jpg';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  Box, InputLabel, MenuItem, Select, Tab, Tabs, SelectChangeEvent,
  FormControl, Checkbox, FormControlLabel,
} from '@mui/material';
import plain from './../../../../../assets/plain.png';
import boult from './../../../../../assets/boult.png';
import train from './../../../../../assets/train.png';
import vehicle from './../../../../../assets/vehicle.png';
import avia from './../../../../../assets/avia.png';
import logo from './../../../../../assets/LOGO-CARGO_02 1.png';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { RootStateType } from '../../../../../bll/store';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import fotoI from './../../../../../assets/4.png'
import save from './../../../../../assets/3.png'
import hr from './../../../../../assets/2.png'
import send from './../../../../../assets/Vector1.png'
import { BlockTotal, DataRecipient } from '../firstStep/FirstStep';

function createData(companyName: string, calories: number, fat: number, carbs: number, protein: number, price: number, desk: string,
) {
  return {
    companyName,
    calories,
    fat,
    carbs,
    protein,
    price,
    desk,
    history: [
      {
        type: '5 $ / кг',
        desk: '10 дней',
        cardDelId: '11091700',
        imgDelUrl: plain,
      },
      {
        type: '10 $ / кг',
        desk: '3  дня',
        cardDelId: '2020-01-02',
        imgDelUrl: boult,
      },
      {
        type: '3.7 $ / кг',
        desk: '30  дней',
        cardDelId: '2020-01-09',
        imgDelUrl: train,
      },
      {
        type: '6 $ / кг',
        desk: '15 - 18  дней',
        cardDelId: '2020-01-22',
        imgDelUrl: vehicle,
      },
      {
        type: '12 $ / кг',
        desk: '1 день',
        cardDelId: '2020-01-92',
        imgDelUrl: avia,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component='th' scope='row'>
          <div className={cl.companyLogoWr}>
            <img src={logo} alt='logo' />
          </div>
          <p className={cl.companyName}>{row.companyName}</p>
        </TableCell>
        <TableCell align='right'>{row.calories}</TableCell>
        <TableCell align='right'>{row.fat}</TableCell>
        <TableCell align='right'>{row.carbs}</TableCell>
        <TableCell align='right'>{row.protein}</TableCell>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size='small' aria-label='purchases'>
                <TableBody className={cl.bodyGray}>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      <p className={cl.tableDesk}>{row.desk}</p>
                      <div className={`${cl.row} ${cl.tableList}`}>
                        <div className={cl.listItem}>
                          <PlaceOutlinedIcon style={{fontSize: '18px', marginRight: '6px'}}/>
                          <p>Адрес прибытия товара</p>
                        </div>
                        <div className={cl.listItem}>
                          <CheckCircleOutlineSharpIcon style={{fontSize: '18px', marginRight: '6px'}}/>
                          <p>Оплата</p>
                        </div>
                        <div className={cl.listItem}>
                          <AccountBalanceWalletOutlinedIcon style={{fontSize: '18px', marginRight: '6px'}}/>
                          <p>Оплата</p>
                        </div>
                      </div>
                      <div className={cl.deskText}>
                        <ClearOutlinedIcon style={{color:'#FF3232',fontSize: '18px', marginRight: '6px'}}/>
                        <p>Сбор нескольких товаров в одну посылку</p>
                      </div>
                      <div className={cl.deskText}>
                        <CheckSharpIcon style={{color:'#79B256',fontSize: '18px', marginRight: '6px'}}/>
                        <p>Локальная отправка<br />
                          Отправка по всей России СДЭК и Почта России </p>
                      </div>
                      <div className={cl.deskText}>
                        <CheckSharpIcon  style={{color:'#79B256',fontSize: '18px', marginRight: '6px'}}/>
                        <p>Только оптовые товары<br />
                          Отправки от 100 кг</p>
                      </div>
                      <div className={`${cl.row} ${cl.tableBtnWrap}`}>
                        <button className={`${cl.chat} ${cl.tableBtn}`}>
                          <MarkChatUnreadOutlinedIcon/>начать чат
                        </button>
                        <button className={`${cl.issue} ${cl.tableBtn}`}>
                          оформить
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={cl.tableCardWrap}>
                        {row.history.map((historyRow) => (
                          <div key={historyRow.cardDelId} className={cl.tableCard}>
                            <img src={historyRow.imgDelUrl} alt='img' />
                            <h4>{historyRow.type}</h4>
                            <p>{historyRow.desk}</p>
                          </div>
                        ))}
                      </div>
                      <div className={cl.tabAdditionalServ}>
                        <h3>Дополнительные услуги</h3>
                        <div className={cl.row}>
                          <div className={cl.innerItem}>
                            <div className={`${cl.innerImg} ${cl.innerImgGray}`}>
                              <img src={send} alt='icon' />
                            </div>
                            <p>10 $</p>
                          </div>
                          <div className={cl.innerItem}>
                            <div className={`${cl.innerImg} ${cl.innerImgGray}`}>
                              <img src={hr} alt='icon' />
                            </div>
                            <p>10-50 $</p>
                          </div>
                          <div className={cl.innerItem}>
                            <div className={`${cl.innerImg} ${cl.innerImgActive}`}>
                              <img src={save} alt='icon' />
                            </div>
                            <p>23%</p>
                          </div>
                          <div className={cl.innerItem}>
                            <div className={`${cl.innerImg} ${cl.innerImgGray}`}>
                              <img src={fotoI} alt='icon' />
                            </div>
                            <p>23%</p>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('Супер доставка 1 “ DNL”', 159, 6.0, 24, 4.0, 3.99,
    '1 онлайн платформа объявлений, наша все о вас. Наша цель - дать возможность каждому человеку в стране ' +
    'независимо общаться с покупателями и продавцами онлайн. Мы заботимся о вас и сделках, ' +
    'которые приближают вас к вашей мечте. Хотите купить свой первый автомобиль? '),
  createData('Супер доставка 1 “ DNM”', 10, 2, 24, 4.0, 3.99,
    '1 онлайн платформа объявлений, наша все о вас. Наша цель - дать возможность каждому человеку в стране ' +
    'независимо общаться с покупателями и продавцами онлайн. Мы заботимся о вас и сделках, ' +
    'которые приближают вас к вашей мечте. Хотите купить свой первый автомобиль? '),
  createData('Супер доставка 1 “ DNEE”', 100, 20, 4, 4.0, 3.99,
    '1 онлайн платформа объявлений, наша все о вас. Наша цель - дать возможность каждому человеку в стране ' +
    'независимо общаться с покупателями и продавцами онлайн. Мы заботимся о вас и сделках, ' +
    'которые приближают вас к вашей мечте. Хотите купить свой первый автомобиль? '),
];

const ThirdStep = () => {
  const dispatch = useDispatch();
  const listUserAdres = useSelector<RootStateType, any>(state => state.order.listUserAdres);
  const currentAdresFromState = useSelector<RootStateType, any>(state => state.order.currentAdres);
  const listSelectedProduct = useSelector<RootStateType, any>(state => state.order.listSelectedProduct);
  const [currentAdres, setCurrentAdres] = useState(listUserAdres[0]);
  const [countryReceipt, setCountryReceipt] = useState('');
  const [countryDeparture, setCountryDeparture] = useState('');
  const [townReceipt, setTownReceipt] = useState('');
  const [townDeparture, setTownDeparture] = useState('');

  const handleChangeTownReceipt = (event: SelectChangeEvent) => {
    setTownReceipt(event.target.value);
  };
  const handleChangeTownDeparture = (event: SelectChangeEvent) => {
    setTownDeparture(event.target.value);
  };
  const handleChangeCountryDeparture = (event: SelectChangeEvent) => {
    setCountryDeparture(event.target.value);
  };
  const handleChangeCountryReceipt = (event: SelectChangeEvent) => {
    setCountryReceipt(event.target.value);
  };
  useEffect(() => {
    currentAdresFromState.id && setCurrentAdres(currentAdresFromState);
  }, [dispatch, currentAdresFromState]);


  return (
    <div className={cl.bg}>
      {/*<div className={cl.dataRecipient}>*/}
      {/*  <p className={cl.dataRecipientDesc}>*/}
      {/*    Выберите способ доставки*/}
      {/*  </p>*/}
      {/*  <p className={cl.orderDesc}>*/}
      {/*    Номер заказа*/}
      {/*    <span className={cl.order}>*/}
      {/*        RT3234234234234*/}
      {/*    </span>*/}
      {/*  </p>*/}
      {/*</div>*/}
      <DataRecipient text={'Выберите способ доставки'} order={'RT3234234234234'}/>
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
                  <InputLabel id='demo-simple-select-label'><AddLocationOutlinedIcon />Страна</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={countryDeparture}
                          label='Страна&nbsp'
                          onChange={handleChangeCountryDeparture}>
                    <MenuItem value={'Москва'}>Страна</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty1</MenuItem>
                    <MenuItem value={'Thirty1'}>Thirty2</MenuItem>
                    <MenuItem value={'Thirty2'}>Thirty3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={cl.select}>
                  <InputLabel id='demo-simple-select-label'><AddLocationOutlinedIcon />Город</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={townDeparture}
                          label='Город&nbsp'
                          onChange={handleChangeTownDeparture}>
                    <MenuItem value={'Москва'}>Москва</MenuItem>
                    <MenuItem value={'Москва'}>Москва1</MenuItem>
                    <MenuItem value={'Москва'}>Москва2</MenuItem>
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
                  <InputLabel id='demo-simple-select-label'><AddLocationOutlinedIcon />Страна</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={countryReceipt}
                          label='Страна&nbsp'
                          onChange={handleChangeCountryReceipt}>
                    <MenuItem value={'Россия'}>Россия</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={cl.select}>
                  <InputLabel id='demo-simple-select-label'><AddLocationOutlinedIcon />Город</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={townReceipt}
                          label='Город &nbsp;'
                          onChange={handleChangeTownReceipt}>
                    <MenuItem value={'Москва'}>Москва</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className={cl.typeDelivery}>
            <p className={cl.selectInfo}>Укажите способ доставки</p>
            <div className={cl.settinsBtnWrap}>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={plain} alt='Авиа' /></span>
                <span>Авиа</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={boult} alt='boult' /></span>
                <span>Море</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={train} alt='Ж/Д' /></span>
                <span>Ж/Д</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={vehicle} alt='Авто' /></span>
                <span>Авто</span>
              </button>
              <button className={cl.btn}>
                <span className={cl.imgWr}><img src={avia} alt='Авиаэкспресс' /></span>
                <span>Авиаэкспресс</span>
              </button>
            </div>
            <button className={cl.btnOrangeSetFilter}>применить фильтр</button>
          </div>
        </div>

        {/*<div className={cl.row}>*/}
      </div>
      <div className={cl.result}>
        <div className={cl.container}>
          <p className={cl.resultTitle}>Результаты поиска</p>

          <TableContainer component={Paper}>
            <Table aria-label='collapsible table'>
              <TableHead>
                <TableRow>

                  <TableCell>Название компании</TableCell>
                  <TableCell align='right'>Выполненных заказов</TableCell>
                  <TableCell align='right'>Время доставки, дни</TableCell>
                  <TableCell align='right'>Цена за 1 кг</TableCell>
                  <TableCell align='right'>Цена за вашу посылку</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.companyName} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <BlockTotal prise={'23 000 $'} delivery={'230 $'} orderPrise={'23 000 $'}/>

    </div>
  );
};

export default ThirdStep;


