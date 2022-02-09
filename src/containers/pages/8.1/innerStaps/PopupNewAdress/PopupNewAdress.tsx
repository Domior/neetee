import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  SelectChangeEvent,
  FormControl, Checkbox, FormControlLabel,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputValidate } from '../../../../../components/InputValidate/Input';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import cl from './PopupNewAdress.module.css';
import { setNewAdresAC } from '../../../../../bll/orderReducer';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`} {...other} >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/*<div>{children}</div>*/}
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

type propsType = {
  open: boolean
}
export const PopupNewAdress = ({ open }: propsType) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [index, setIndex] = useState('');
  const [inn, setInn] = useState('');
  const [country, setCountry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [town, setTown] = useState('');
  const [adres, setAdres] = useState('');
  const setNewInputsValue = (inputValue: string, name: string) => {
    if (name === 'inn') setInn(inputValue);
    if (name === 'companyName') setCompanyName(inputValue);
    if (name === 'firstName') setFirstName(inputValue);
    if (name === 'phone') setPhone(inputValue);
    if (name === 'email') setEmail(inputValue);
    if (name === 'index') setIndex(inputValue);
    // if (name === 'adres') setAdres(inputValue);
  };
  const handleChangeAdres = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdres(event.target.value);
  };
  const handleChangeTown = (event: SelectChangeEvent) => {
    setTown(event.target.value as string);
  };
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  const addNewAdres = () => {
    if (phone === '' || firstName === '' || email === '' || index === '' || country === '' || town === '' ||
      companyName === '' || adres === '' || inn === '') {
      setError('All fields are required');
    } else {
      let id = new Date().getHours();
      let payload = { id, phone, firstName, email, adres, index, country, town, companyName, inn };
      dispatch(setNewAdresAC(payload));
    }
  };
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Dialog open={open} className={cl.popupWrap}>
      <DialogTitle>create адрес</DialogTitle>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Физическим лицам' {...a11yProps(0)} />
            <Tab label='Юридическим лицам'{...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}><p>Item One</p></TabPanel>
        <TabPanel value={value} index={1}>
          <form>
            <div className={cl.row}>
              <InputValidate type={'string'} placeholder={'ИНН*'} name={'inn'}
                             min={5} max={5} typeV={'number'} addInputValue={setNewInputsValue} />
              <InputValidate type={'string'} placeholder={'Название компании*'} name={'companyName'}
                             min={4} max={12} typeV={'string'} addInputValue={setNewInputsValue} />
            </div>
            <InputValidate type={'string'} placeholder={'ФИО*'} name={'firstName'}
                           min={10} max={30} typeV={'string'} addInputValue={setNewInputsValue} />
            <div className={cl.row}>
              <InputValidate type={'string'} placeholder={'Номер телефона*'} name={'phone'} min={13} max={16}
                             typeV={'phone'}
                             addInputValue={setNewInputsValue} />
              <InputValidate type={'string'} placeholder={'E-mail*'} name={'email'} min={5} max={20} typeV={'string'}
                             addInputValue={setNewInputsValue} />
            </div>
            <div className={cl.row}>
              <div className={cl.column}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Страна*</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={country} label='Страна*'
                          onChange={handleChangeCountry}>
                    <MenuItem value={'Россия'}>Россия</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Город*</InputLabel>
                  <Select labelId='demo-simple-select-label' id='demo-simple-select' value={town} label='Город*'
                          onChange={handleChangeTown}>
                    <MenuItem value={'Москва'}>Москва</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <InputValidate type={'string'} placeholder={'Индекс*'} name={'index'} min={10} max={10} typeV={'number'}
                               addInputValue={setNewInputsValue} />
              </div>
              <div className={cl.column}>
                <TextField id='standard-multiline-static' label='Адрес получателя*' multiline rows={4} value={adres}
                  // min={10} max={30}
                           onChange={handleChangeAdres}
                />
              </div>
            </div>
            {error &&<p>{error}</p>}
            <div className={cl.row}>
              <FormControlLabel
                label="Привязать аккаунт другого пользователя"
                control={
                  <Checkbox
                    checked={checked}
                    // indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                    // color='info'
                  />
                }
              />
            </div>
            <div className={cl.row}>
              <AccountCircleOutlinedIcon/>
              <div>
                <div className={cl.row}>
                  <p>Укажите получателя</p>
                  <span>
                    <InfoOutlinedIcon/>
                  </span>
                </div>
                <input type='text' placeholder='Никнейм'/>
              </div>
            </div>
            <div className={cl.row}>
              <p>Добавить оповещение в соц. сети</p>
              <button><FacebookOutlinedIcon/>Facebook</button>
            </div>
            <button onClick={addNewAdres}>add</button>
          </form>
        </TabPanel>
      </Box>
    </Dialog>
  );
};
