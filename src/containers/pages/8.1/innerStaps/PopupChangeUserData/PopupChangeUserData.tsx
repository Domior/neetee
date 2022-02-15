import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Box, Dialog, } from '@mui/material';
import cl from './PopupChangeUserData.module.css';
import { RootStateType } from '../../../../../bll/store';
import { FormUserData } from '../PopupNewAdress/PopupNewAdress';
import { itemUserAdresType } from '../../../../../bll/orderReducer';


type propsType = {
  open: boolean
  handleClose:()=>void
  changeUserAdres:(payload:itemUserAdresType)=>void
}

export const PopupChangeUserData = ({ open, handleClose,...props }: propsType) => {
  const dispatch = useDispatch();
  const currentAdres = useSelector<RootStateType, any>(state => state.order.currentAdres);
  // const [value, setValue] = useState(0);
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  const userType = currentAdres.companyName ? 'legalEntities' : 'individuals';

  return (
    <Dialog open={open} className={cl.popupWrap} maxWidth="lg" onClose={handleClose}
      // fullScreen={fullScreen}
    >
      <Box sx={{ width: '100%' }}>
        <FormUserData userType={userType} data={true} setData={props.changeUserAdres}/>
      </Box>
    </Dialog>
  );
};
