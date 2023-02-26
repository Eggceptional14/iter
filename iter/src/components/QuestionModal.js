import React, { useState, useEffect } from 'react';
import { useRouter, Router } from 'next/router';
import { Modal, Box, Button, Typography, IconButton, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { LinearProgress } from '@material-ui/core';
import RangeSlider from '../../src/components/RangeSlider';

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

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '50%',
    height: '80%',
    backgroundColor: 'var(--blue)',
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  }
}));

export default function QuestionModal({ open, handleClose, title }) {
  const classes = useStyles();
  const router = useRouter()
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxSteps = steps.length;
  const [updatedSteps, setUpdatedSteps] = useState(steps); // New state for updated steps array
  const [budgetRange, setBudgetRange] = useState([0, 1000]); // New state for budget range

  const handleNext = () => {
    if(activeStep === maxSteps - 1) {
      router.push('/itinerary/ItineraryPage')
    } else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={classes.modal}
    >
      <Box className={classes.paper}>
        <Box className={classes.title}>
          <Typography id="modal-title" variant="h5" component="h2" sx={{ color: 'var(--dark-gray)'}}>
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: 'white' }}/>
          </IconButton>
        </Box>
          <Box sx={{ maxWidth: 1000, flexGrow: 1, mt: 5 }}>
            <LinearProgress
              // color="primary"
              variant="determinate"
              value={(activeStep + 1) * (100 / maxSteps)}
              style={{ width: '100%', height: 5 }}
              sx={{ color: 'orange' }}
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
              <Typography variant="h6" sx={{ color: 'var(--dark-gray)'}}>{updatedSteps[activeStep].label}</Typography>
            </Paper>
          <Box sx={{ height: 255, width: '100%', p: 2, backgroundColor: 'var(--light-ivory)' }}>
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
                    color: selectedOptions.includes(option) ? '#FFFFFF' : 'var(--orange)',
                    borderColor: 'var(--orange)',
                    margin: '5px',
                    backgroundColor: selectedOptions.includes(option)
                      ? 'var(--orange)'
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: 'var(--orange)',
                      color: '#FFFFFF',
                      borderColor: 'var(--orange)',
                    },
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
              // <Button sx={{ color: 'var(--orange)'}} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              <Button sx={{ color: 'var(--orange)'}} size="small" onClick={handleNext}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button sx={{ color: 'var(--orange)'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
            sx={{ backgroundColor: 'var(--light-ivory)' }}
          />
        </Box>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}
      </Box>
    </Modal>
  );
}
