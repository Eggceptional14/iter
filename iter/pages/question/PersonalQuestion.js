import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import styles from '../../styles/Home.module.css';
import { LinearProgress } from '@material-ui/core';
import RangeSlider from '../../src/components/RangeSlider'


const steps = [
  {
    label: 'What is your budget for this trip?',
    slider: true,
    range: [0, 1000],
    step: 50,
  },
  {
    label: 'What is your target types of attraction for this trip?',
    options: ['Beach', 'Mountain', 'Historical', 'Adventure'],
  },
  {
    label: 'What is your target types of attraction for this trip?',
    options: ['Beach', 'Mountain', 'Historical', 'Adventure'],
  },
  {
    label: 'What is your target types of attraction for this trip?',
    options: ['Beach', 'Mountain', 'Historical', 'Adventure'],
  },
];

export default function PersonalQuestion() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxSteps = steps.length;
  const [updatedSteps, setUpdatedSteps] = useState(steps); // New state for updated steps array

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSelectedOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  
  const handleRangeSliderChange = (event, newValue) => {
    const updatedStepsArray = [...updatedSteps]; // Create a new copy of the steps array
    updatedStepsArray[activeStep].range = newValue; // Update the range value of the current step in the new array
    setUpdatedSteps(updatedStepsArray); // Update the state of the steps array
  };

  useEffect(() => {
    setSelectedOptions([]);
  }, [activeStep]);

  return (
    <div className={styles.containerMain2}>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <LinearProgress
          color="primary"
          variant="determinate"
          value={(activeStep + 1) * (100 / maxSteps)}
          style={{ width: '100%', height: 5 }}
        />
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'var(--light-ivory)',
          }}
        >
          <Typography>{updatedSteps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2, backgroundColor: 'var(--light-ivory)' }}>
        {steps[activeStep].slider ? (
          <Box sx={{ width: '100%' }}>
            <Typography id="range-slider" gutterBottom>
              {steps[activeStep].label}
            </Typography>
            <RangeSlider
              value={steps[activeStep].range}
              onChange={(event, newValue) => {
                steps[activeStep].range = newValue;
              }}
              step={steps[activeStep].step}
              marks
              min={0}
              max={1000}
              aria-labelledby="range-slider"
            />
          </Box>
        ) : (
          steps[activeStep].options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOptions.includes(option) ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSelectedOption(option)}
              style={{ margin: '10px 10px 0px 0px' }}
            >
              {option}
            </Button>
          ))
        )}

        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1 || selectedOptions.length === 0}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
              ) : (
              <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}
