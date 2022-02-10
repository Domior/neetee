import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Box, Dialog, } from '@mui/material';
import cl from './PopupChangeUserData.module.css';
import { setNewAdresAC } from '../../../../../bll/orderReducer';
import { RootStateType } from '../../../../../bll/store';
import { FormUserData } from '../PopupNewAdress/PopupNewAdress';


type propsType = {
  open: boolean
  handleClose:()=>void
}

export const PopupChangeUserData = ({ open, handleClose }: propsType) => {
  const dispatch = useDispatch();
  const currentAdres = useSelector<RootStateType, any>(state => state.order.currentAdres);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const userType = currentAdres.companyName ? 'legalEntities' : 'individuals';

  return (
    <Dialog open={open} className={cl.popupWrap} maxWidth='lg'
      // fullScreen={fullScreen}
    >
      <Box sx={{ width: '100%' }}>
        <FormUserData userType={userType} />
      </Box>
    </Dialog>
  );
};
