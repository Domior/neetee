import React, { useEffect, useState } from 'react';
import cl from './CargoTracking.module.css';
import { Box, Button, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import plain from './../../../../../assets/plain.png';
import boult from './../../../../../assets/boult.png';
import train from './../../../../../assets/train.png';
import vehicle from './../../../../../assets/vehicle.png';
import avia from './../../../../../assets/avia.png';
import icon from './../../../../../assets/lastStepIcon.png';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


type stepType = {
  label: string
  time: string
  description: string
}

type propsType = {
  trackNumber: string[]
  deliveryAddress: string
  deliveryType: string
  phone: string
  steps: Array<stepType>
  delivered?: string
  someInfo?: Array<string>
}
const CargoTracking = ({ steps, ...props }: propsType) => {
  const type = props.deliveryType;
  const [activeStep, setActiveStep] = useState(0);
  const [lastStep, setLastStep] = useState<number>(0);
  const [write, setWrite] = useState(false);

  useEffect(()=>{
    setActiveStep(steps.length)
    setLastStep(steps.length-1)
  },[])

  const typeDel = () => {
    if (type === 'plain') {
      return <div className={cl.deliveryType}>
        <span className={cl.imgWr}><img src={plain} alt='Авиа' /></span>
        <span>Авиа</span>
      </div>;
    }
    if (type === 'boult') {
      return <div className={cl.deliveryType}>
        <span className={cl.imgWr}><img src={boult} alt='boult' /></span>
        <span>Море</span>
      </div>;
    }
    if (type === 'train') {
      return <div className={cl.deliveryType}>
        <span className={cl.imgWr}><img src={train} alt='Ж/Д' /></span>
        <span>Ж/Д</span>
      </div>;
    }
    if (type === 'vehicle') {
      return <div className={cl.deliveryType}>
        <span className={cl.imgWr}><img src={vehicle} alt='Авто' /></span>
        <span>Авто</span>
      </div>;
    }
    if (type === 'avia') {
      return <div className={cl.deliveryType}>
        <span className={cl.imgWr}><img src={avia} alt='Авиаэкспресс' /></span>
        <span>Авиаэкспресс</span>
      </div>;
    }
  };
  const handlerDelivered = () => { };

  return (
    <div className={cl.bg}>
      <div className={cl.row}>
        <div className={cl.columnLeft}>
          {typeDel()}
          <p className={cl.trackText}>Трек-номер отслеживания груза </p>
          <p className={cl.trackProps}>{props.trackNumber[0]} </p>
          <p className={cl.trackProps}>{props.trackNumber?.[1]} </p>
          <p className={cl.adresText} style={{ marginTop: '15px', marginBottom: '10px' }}>Адрес выдачи груза</p>
          <p className={cl.adresProps}>{props.deliveryAddress} </p>
          <p className={cl.phoneProps}>{props.phone} </p>
          <Button className={`${cl.writeBtn} ${write && cl.active}`} onClick={() => setWrite(!write)}>
            <CommentOutlinedIcon />
            <span>Написать</span>
          </Button>
        </div>
        <div className={cl.columnRight}>
          <Stepper orientation='vertical' className='deliveryStepper'>
          {/*<Stepper activeStep={activeStep} orientation='vertical' className='deliveryStepper'>*/}
            {steps.map((step, index) => {
              console.log('map!!!!! index,lastStep',index,lastStep);
             return (
                <Step key={step.label}>
                  <StepLabel className={cl.stepInfo} icon={index == lastStep ? <img src={icon} alt='icon' style={{marginLeft:'6px'}}/>:''}>
                  <div className={cl.wrapLabel} style={{ color: index == lastStep ? '#4270AD' : '#666666' }}>
                    <span> {step.label}</span> <span className={cl.stepInfoTime}>{step.time}</span>
                    <span>{step.description}</span>
                  </div>
                </StepLabel>
                </Step>);
            })}
            {props.someInfo && props.someInfo.map(i=><p className={cl.someInfoT}>{i}</p>)}
            {props.delivered && <><p className={cl.deliveredT}>{props.delivered}</p>
              <button onClick={handlerDelivered} className={cl.orangeBtn}>
                Груз получен<ArrowForwardIosOutlinedIcon/>
              </button>
            </>}
          </Stepper>
        </div>
      </div>
    </div>
  );
};

export default CargoTracking;
