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
    range: [0, 10000],
    step: 500,
  },
  {
    label: 'What is kind of trip you are going for?',
    options: ['Fast-paced', 'Medium', 'Slow & easy'],
  },
  {
    label: ' What is your target types of attraction for this trip?',
    options: ['Educational', 'Historical', 'Market & Shopping', 'Nature', 'Recreational & Entertainment', 'Chillout', 'Cultural', 'Sport'],
  },
  {
    label: 'What is your preferred activities?',
    options: ['Educational Activities', 'Extreme Sports ', 'Shopping', 'Religious Activities', 'Sports', 'Nature Sightseeing', 'Cultural Activities', 'Relaxing'],
  },
  {
    label: 'What is your preferred cuisine?',
    options: ['Japanese', 'Italian', 'Mediterranean', 'Thai', 'Indian', 'French / Bistro', 'Chinese', 'Spanish', 'Random'],
  },
  {
    label: 'What is your(or person in a group) diet restriction?',
    options: ['Halal', 'Vegetarian', 'Vegan', 'Allergies'],
  },
];

export default function PersonalQuestion() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxSteps = steps.length;
  const [updatedSteps, setUpdatedSteps] = useState(steps); // New state for updated steps array
  const [budgetRange, setBudgetRange] = useState([0, 1000]); // New state for budget range

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
    const updatedStepsArray = [...updatedSteps];
    updatedStepsArray[activeStep].range = newValue;
    setUpdatedSteps(updatedStepsArray);
    if (updatedStepsArray[activeStep].slider) {
      setBudgetRange(updatedStepsArray[activeStep].range);
    }
  };
  
  useEffect(() => {
    setSelectedOptions([]);
  }, [activeStep]);

  useEffect(() => {
    if (updatedSteps[activeStep].slider) {
      setBudgetRange(updatedSteps[activeStep].range);
    }
  }, [activeStep, updatedSteps]);
  

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
        {/* <Typography>Range: ${updatedSteps[activeStep].range[0]} - ${updatedSteps[activeStep].range[1]}</Typography> */}
        {updatedSteps[activeStep].slider ? (
          <RangeSlider
            value={updatedSteps[activeStep].range}
            step={updatedSteps[activeStep].step}
            onChange={handleRangeSliderChange}
          />
          ) : (
            <div>
              {updatedSteps[activeStep].options.map((option) => (
                <Button
                  key={option}
                  variant={selectedOptions.includes(option) ? 'contained' : 'outlined'}
                  sx={{
                    color: 'var(--dark-gray)',
                    borderColor: 'var(--light-gray)',
                    margin: '5px',
                  }}
                  onClick={() => handleSelectedOption(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          )}
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}
