import React, { useState } from 'react';
import { Button, Step, StepButton, Stepper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import cl from './ConfirmationOfAnOrder.module.css';
import StepLabel from '@mui/material/StepLabel';
import FirstStep  from './innerStaps/firstStep/FirstStep';
import ThirdStep from './innerStaps/thirdStep/ThirdStep';
import SecondStep from './innerStaps/secondStep/SecondStep';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';


const steps = ['Данные получателя', 'Оплата товара', 'Выбор доставки','Отслеживание заказа'];
const innerSteps = [
  <FirstStep/>,
  <SecondStep/>,
  <ThirdStep/>,
  'finish'
]
const ConfirmationOfAnOrder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    const newActiveStep = isLastStep() && !allStepsCompleted()
      ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
      steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };


  return (
    <div className={cl.stepperStyle}>
      <Stepper nonLinear activeStep={activeStep} className={cl.stepperWrap} >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)} >
            {/*<StepLabel  className={cl.stepButton}>*/}
              {label}
            {/*</StepLabel>*/}
            </StepButton>
          </Step>
        ))}
      </Stepper>
        <Box className={cl.red}>
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              {/*<div sx={{ mt: 2, mb: 1 }}>task {activeStep + 1}</div>*/}
                <Box sx={{ mt: 8, mb: 5 }} >
                  {innerSteps[activeStep]}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}className={cl.container}>
                    {activeStep !== 0 &&
                    <Button color="inherit"  onClick={handleBack} sx={{ mr: 1 }} className={cl.backBtn}>
                      <ArrowBackIosNewOutlinedIcon className={cl.iconBack}/> назад
                    </Button>
                    }
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext} sx={{ mr: 1 }} className={cl.nextBtn}>
                      Далее <ArrowForwardIosOutlinedIcon className={cl.iconNext}/>
                    </Button>
                    {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography variant="caption" sx={{ display: 'inline-block' }}>
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                      </Button>
                    ))}
                  </Box>
                </Box>
            </>
          )}
        </Box>
    </div>
  );
};

export default ConfirmationOfAnOrder;
