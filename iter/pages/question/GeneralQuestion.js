import React, { useState, useEffect } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { 
  TextField, 
  Button, 
  IconButton, 
  Stack, 
  Typography, 
  Autocomplete,
  Chip,
  Box,
  Alert,
} from '@mui/material';
import * as Yup from 'yup';
import styles from '../../styles/Question.module.css'
import { useRouter, Router } from 'next/router';
import GeneralQuestionNavbar from '../../src/components/GeneralQuestionNavbar';
import QuestionModal from '../../src/components/QuestionModal';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  datePicker: {
    borderRadius: '50px',
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#e0e0e0',
      borderRadius: 50,
      padding: 10,
      width:'14em',
      height:'3.5em'
    },
  },
});

const emailSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export default function GeneralQuestion() {
    const router = useRouter()
    // const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const options = ['Bangkok', 'Nonthaburi', 'Pathumthani'];
    //email
    const [email, setEmail] = useState('');
    const [emailTags, setEmailTags] = useState([]);
    const [error, setError] = useState('');
    //date
    const [dateValue, setDateValue] = React.useState(dayjs(new Date));
    const [dateStartValue, setDateStartValue] = React.useState(dayjs(new Date));
    const [dateEndValue, setDateEndValue] = React.useState(dayjs(new Date));
    const classes = useStyles();
    //personal questions
    const [openPersonalQuestionsModal, setOpenPersonalQuestionsModal] = useState(false);

    const handleAddEmail = async () => {
      try {
        await emailSchema.validate({ email });
        if(emailTags.indexOf(email) === -1) {
          setEmailTags([...emailTags, email]);
          setEmail('');
          setError('');
        }
        else {
          setError("Email already exist!")
        }
      } catch (err) {
        setError(err.message);
      }
    };
  
    const handleDelete = (emailToDelete) => () => {
      setEmailTags((emailTags) => emailTags.filter((email) => email !== emailToDelete));
      setError('');
    };

    const handleContinue = () => {
      if (searchTerm) {
        handleOpenPersonalQuestionModal();
        // router.push('/question/PersonalQuestion');
      } else {
        alert('Items are not filled in properly')
      }
    };

    const handleOpenPersonalQuestionModal = () => {
      setOpenPersonalQuestionsModal(true);
    };
  
    const handleClosePersonalQuestionModal = () => {
      setOpenPersonalQuestionsModal(false);
    };

    useEffect(() => {
      setDateStartValue(dayjs(new Date()));
      setDateEndValue(dayjs(new Date()));
    }, []);
    return (
      <>
        <QuestionModal 
          open={openPersonalQuestionsModal} 
          handleClose={handleClosePersonalQuestionModal}
          title={'Personal Question'}
        />
        <GeneralQuestionNavbar />
        <div style={{ position:'absolute', zIndex: -1, top: -25 }}>
          <svg width="1280" height="396" viewBox="0 0 1440 396" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_460_517)">
          <path d="M1459 152.587L1424.25 143.569C1389.39 134.463 1319.89 116.426 1250.48 114.5C1181.08 112.574 1111.78 126.933 1042.37 129.209C972.971 131.573 903.465 121.942 833.859 109.684C764.253 97.4267 694.747 82.5422 625.141 91.1227C555.535 99.7907 486.029 131.836 416.625 139.716C347.222 147.596 277.919 131.311 208.516 126.495C139.112 121.68 69.6066 128.334 34.7526 131.748L1.53087e-06 135.075L1.19408e-05 16L34.7526 16C69.6066 16 139.112 16 208.516 16C277.919 16 347.222 16 416.626 16C486.029 16 555.535 16 625.141 16C694.747 16 764.253 16 833.859 16.0001C903.465 16.0001 972.971 16.0001 1042.37 16.0001C1111.78 16.0001 1181.08 16.0001 1250.48 16.0001C1319.89 16.0001 1389.39 16.0001 1424.25 16.0001L1459 16.0001L1459 152.587Z" fill="#56BEEC"/>
          </g>
          <rect width="1440" height="68" fill="#56BEEC"/>
          <defs>
          <clipPath id="clip0_460_517">
          <rect width="1459" height="394" fill="white" transform="translate(1459 396) rotate(-180)"/>
          </clipPath>
          </defs>
          </svg>
        </div>
        <Stack direction="column" spacing={2} sx={{ mt:'4em', position: 'absolute', justifyContent: 'center', alignItems: 'center', marginLeft: '30%' }}>
          <Stack direction="row" spacing={1} sx={{ mt:'4em', alignItems:'center' }}>
            <ArrowCircleDownIcon style={{ transform: 'rotate(90deg)',fontSize:'35px', color: 'var(--blue)', marginRight:'10px' }}/>
            <h1 style={{ fontSize:40, fontWeight:'700', letterSpacing:1.2, color: 'var(--blue)', marginLeft: 'auto', marginRight: 'auto' }}>Plan your journey!</h1>
          </Stack>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Autocomplete
            options={options}
            value={searchTerm}
            onChange={(event, newValue) => {
              setSearchTerm(newValue);
              // onSearch(newValue);
            }}
            componentsProps={{
              paper: {
                sx: {
                  width: 350,
                  margin: "auto"
                }
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  width: '30rem',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '25px',
                  border: 'none',
                  boxShadow: 'none',
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
        
                    legend: {
                      marginLeft: "30px"
                    }
                  },
                  "& .MuiAutocomplete-inputRoot": {
                    paddingLeft: "20px !important",
                    borderRadius: "50px"
                  },
                  "& .MuiInputLabel-outlined": {
                    paddingLeft: "20px"
                  },
                  "& .MuiInputLabel-shrink": {
                    marginLeft: "20px",
                    paddingLeft: "10px",
                    paddingRight: 0,
                    background: 'transparent'
                  }
                }}
                label="Search for a country, city, or region"
                variant="outlined"
              />
            )}
          />
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3} direction="row">
            <DesktopDatePicker
              value={dateStartValue}
              minDate={dayjs(new Date)}
              onChange={(newValue) => {
                setDateStartValue(newValue);
              }}
              className={classes.datePicker}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  className={classes.datePicker}
                />
              )}
            />
            <DesktopDatePicker
              value={dateEndValue}
              minDate={dayjs(new Date)}
              onChange={(newValue) => {
                setDateEndValue(newValue);
              }}
              className={classes.datePicker}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  className={classes.datePicker}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>


        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Travellers"
          variant="outlined"
          type="email"
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleAddEmail();
            }
          }}
          FormHelperTextProps={{ style: { backgroundColor: 'transparent' }}}
          style={{ 
            width: '30rem', 
            backgroundColor: '#e0e0e0', 
            borderRadius: '25px', 
            border: 'none', 
            boxShadow: 'none',
            }}
          InputLabelProps={{
            style: { paddingLeft: "20px" }
          }}
          InputProps={{
            style: { paddingLeft: "20px", borderRadius: "50px" }
          }}
          error={!!error}
          helperText={error}
        />
        <div>
          {emailTags.map((email) => (
            <Chip
              key={email}
              label={email}
              onDelete={handleDelete(email)}
              style={{margin: '0.5rem'}}
            />
          ))}
        </div>
        
        <Button 
          onClick={handleContinue}
          variant='contained' 
          size="large"
          sx={{ 
            width:'20em',
            height: '3.2em',
            backgroundColor:'var(--blue)',
            "&:hover":{
              backgroundColor:'var(--blue)',
            },
            borderRadius:'20px',
            padding:'0.5em 3em 0.5em 3em',
            mt:'1em',
            fontWeight:600,
            zIndex:2,
          }}
        >
          Continue to Questions
        </Button>
        <p 
          style={{ 
            margin:"0px 0px 0px 0px",
            fontSize:"12px"
          }}
        >
          Already have a plan in mind?
          <a style={{ color: 'var(--orange'}} href="/">Create a blank plan</a>
        </p>
        </Stack>
      </>
    )
}