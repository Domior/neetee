import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Dialog,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  SelectChangeEvent,
  FormControl, Checkbox, FormControlLabel, Popover,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputValidate } from '../../../../../components/InputValidate/Input';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import cl from './PopupNewAdress.module.css';
import { setCurrentAdresAC, setNewAdresAC } from '../../../../../bll/orderReducer';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsappSharpIcon from '@mui/icons-material/WhatsappSharp';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import UserCard from '../../../../../components/UserCard/UserCard';
import { RootStateType } from '../../../../../bll/store';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

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
  handleClose: () => void
  setNewAdres:(payload:any)=>void
}

export const PopupNewAdress = ({ open, handleClose,...props }: propsType) => {
  // const dispatch = useDispatch();
  // const listUserAdres = useSelector<RootStateType,any>(state => state.order.listUserAdres);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const selected = () => {

  };
  return (
    <Dialog open={open} className={cl.popupWrap} maxWidth='lg' onClose={handleClose}
      // fullScreen={fullScreen}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered aria-label="tabs example"  textColor="inherit" classes={{ indicator: cl.tabTitleSelected }}>
            {/*aria-label="disabled tabs example"*/}
            {/*<Tab label="???????????????????? ??????????" {...a11yProps(0)} className={`${ cl.tabTitle } .selected &&${ cl.tabTitleSelected }`}/>*/}
            <Tab label='???????????????????? ??????????'  {...a11yProps(0)} className={`${cl.tabTitle}`} />
            <Tab label='?????????????????????? ??????????' {...a11yProps(1)} className={cl.tabTitle} />

          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FormUserData userType={'individuals'} setData={props.setNewAdres}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormUserData userType={'legalEntities'} setData={props.setNewAdres}/>
        </TabPanel>
      </Box>
    </Dialog>
  );
};


type propsFormUserData = {
  userType: string
  data?: boolean
  setData:(payload:any)=>void
}
export const FormUserData = ({ userType, ...props }: propsFormUserData) => {
  const dispatch = useDispatch();
  const listUserAdres = useSelector<RootStateType, any>(state => state.order.listUserAdres);
  const currentAdres = useSelector<RootStateType, any>(state => state.order.currentAdres);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [index, setIndex] = useState('');
  const [inn, setInn] = useState('');
  const [country, setCountry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [town, setTown] = useState('');
  const [adres, setAdres] = useState('');
  const [other, setOther] = useState('');
  const [popoverRecipient, setPopoverRecipient] = useState<HTMLButtonElement | null>(null);
  const handlePopoverRecipient = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverRecipient(event.currentTarget);
  };
  const idR = !!popoverRecipient ? 'simple-popover' : undefined;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
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
  const handleChangeOther = (event: SelectChangeEvent) => {
    setOther(event.target.value as string);
  };
  const addNewAdres = () => {
    if (userType === 'individuals' && (phone === '' || firstName === ''
      || email === '' || index === '' || country === ''
      || town === '' || companyName === '' || adres === '' || inn === '')) {
      setError('All fields are required');
    } else {
      let id = new Date().getDate().toString()
      let payload = { phone, firstName, email, adres, index, country, town, companyName, inn };
      // let payload = { id, phone, firstName, email, adres, index, country, town, companyName, inn };
      // dispatch(setNewAdresAC(payload));
      // dispatch(setCurrentAdresAC(payload));
      props.setData(payload)
    }
    if (userType === 'legalEntities' && (phone === '' || firstName === ''
      || email === '' || index === '' || country === ''
      || town === '' || adres === '')) {
      setError('All fields are required');
    } else {
      let id = new Date().getDate().toString()
      let payload = { phone, firstName, email, adres, index, country, town, companyName, inn };
      // let payload = { id, phone, firstName, email, adres, index, country, town, companyName, inn };
      // dispatch(setNewAdresAC(payload));
      // dispatch(setCurrentAdresAC(payload));
      props.setData(payload)
    }
  };
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const selectUser = (u: any) => {
    console.log(u);
  };
  const removeUser = (u: any) => {
    console.log(u);
  };
  useEffect(() => {
    // debugger
    if (props.data) {
      //currentAdres
      setFirstName(currentAdres.firstName);
      setPhone(currentAdres.phone);
      setEmail(currentAdres.email);
      setIndex(currentAdres.index);
      setAdres(currentAdres.adres);
      setTown(currentAdres.town);
      setCompanyName(currentAdres.companyName);
      setCountry(currentAdres.country);
      setInn(currentAdres.inn);
    }
  }, [props.data]);
  console.log(firstName, phone, email, index, adres);
  console.log('userType', userType == 'individuals', typeof (userType));
  return (
    <form className={cl.formStyle} >
      {userType != 'individuals' &&
      <div className={cl.row}>
        <InputValidate type={'string'} placeholder={'??????*'} label={'??????*'} name={'inn'}
                       min={5} max={5} typeV={'number'} addInputValue={setNewInputsValue} oldValue={inn} />
        <InputValidate type={'string'} placeholder={'???????????????? ????????????????*'} label={'???????????????? ????????????????*'}
                       name={'companyName'}
                       min={4} max={12} typeV={'string'} addInputValue={setNewInputsValue} oldValue={companyName} />
      </div>}
      <InputValidate type={'string'} placeholder={'??????*'} label={'??????*'} name={'firstName'}
                     min={10} max={30} typeV={'string'} addInputValue={setNewInputsValue} oldValue={firstName} />
      <div className={cl.row}>
        <InputValidate type={'string'} placeholder={'?????????? ????????????????*'} label={'?????????? ????????????????*'} name={'phone'}
                       min={13} max={16}
                       typeV={'phone'} addInputValue={setNewInputsValue} oldValue={phone} />
        <InputValidate type={'string'} placeholder={'E-mail*'} label={'E-mail*'} name={'email'} min={5} max={20}
                       typeV={'string'}
                       addInputValue={setNewInputsValue} oldValue={email} />
      </div>
      <div className={cl.row}>
        <div className={cl.column}>
          <FormControl className={cl.select}>
            <InputLabel id='demo-simple-select-label'>????????????*</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={country} label='????????????*'
                    onChange={handleChangeCountry}>
              <MenuItem value={'????????????'}>????????????</MenuItem>
              <MenuItem value={'Twenty'}>Twenty</MenuItem>
              <MenuItem value={'Thirty'}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={cl.select}>
            <InputLabel id='demo-simple-select-label'>??????????*</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={town} label='??????????*'
                    onChange={handleChangeTown}>
              <MenuItem value={'????????????'}>????????????</MenuItem>
              <MenuItem value={'Twenty'}>Twenty</MenuItem>
              <MenuItem value={'Thirty'}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div className={cl.index}>
            <InputValidate type={'string'} placeholder={'????????????*'} label={'????????????*'} name={'index'}
                           min={10} max={10} typeV={'number'} addInputValue={setNewInputsValue} oldValue={index} />
          </div>
        </div>
        <div className={cl.column}>
          <TextField id='standard-multiline-static' label='?????????? ????????????????????*' multiline value={adres} rows={8}
            // min={10} max={30} rows={4}
                     className={cl.multiField} onChange={handleChangeAdres}
          />
        </div>
      </div>
      {error && <p>{error}</p>}
      <div className={cl.row}>
        <FormControlLabel
          label='?????????????????? ?????????????? ?????????????? ????????????????????????'
          control={
            <Checkbox checked={checked} onChange={handleChange1} style={{ color: '#C4C4C4' }}
              // indeterminate={checked[0] !== checked[1]} color='info'
            />
          }
        />
      </div>
      {checked &&
      <div className={cl.row}>
        <AccountCircleOutlinedIcon style={{ color: '#C4C4C4', fontSize: '75px' }} />
        <div className={cl.userChange}>
          <div style={{ display: 'flex' ,alignItems: 'center'}}>
            <p>?????????????? ????????????????????</p>
            <span  aria-describedby={idR} onClick={handlePopoverRecipient}>
              <InfoOutlinedIcon style={{ marginLeft: '10px', color: '#FF9900' }}/>
            </span>
            <Popover id={idR} open={!!popoverRecipient} anchorEl={popoverRecipient}
              onClose={()=>setPopoverRecipient(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}>
              <p>some text for ...</p>
            </Popover>
          </div>
          <input type='text' placeholder='??????????????' />
        </div>
      </div>
      }
      <div>
        <p className={cl.add}>???????????????? ???????????????????? ?? ??????. ????????</p>
        <div className={`${cl.row} ${cl.sotialRow}`}>
          <button className={`${cl.sotialBtn} ${cl.fb}`}><FacebookOutlinedIcon />Facebook</button>
          <button className={`${cl.sotialBtn} ${cl.tg}`}><TelegramIcon />Telegram</button>
          <button className={`${cl.sotialBtn} ${cl.ws}`}><WhatsappSharpIcon />Whatsapp</button>
          <FormControl className={cl.sotialSelect}>
            <InputLabel id='demo-simple-select-label'>????????????</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={other} label='????????????'
                    onChange={handleChangeOther}>
              <MenuItem value={'first'}>first</MenuItem>
              <MenuItem value={'Twenty'}>Twenty</MenuItem>
              <MenuItem value={'Thirty'}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={cl.bottomBtn}>
        <button onClick={addNewAdres} className={cl.bottomBtnApply}>??????????????????</button>
        <button onClick={addNewAdres} className={cl.bottomBtnCreate}>??????????????</button>
        <button onClick={() => {
        }} className={cl.bottomBtnRemove}><DeleteOutlineSharpIcon />??????????????
        </button>
      </div>
      <UserCard user={listUserAdres[0]} selectUser={selectUser} removeUser={removeUser} />
      <button className={cl.loadMore}><span>?????????????????? ??????</span> <DownloadForOfflineOutlinedIcon /></button>
    </form>
  );
};
