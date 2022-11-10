import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/router';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// @mui
import { LoadingButton} from '@mui/lab';
import { Snackbar, Alert } from '@mui/material';
import { Typography, Stack, Link, TextField, IconButton, InputAdornment } from '@mui/material';
// components
import Iconify from '../components/Iconify';

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(3, 'Mininum 3 characters')
    .max(15, 'Maximum 15 characters'),

  lastName: Yup.string()
    .required('Last name is required')
    .min(3, 'Mininum 3 characters')
    .max(15, 'Maximum 15 characters'), 

  schoolName: Yup.string().required('School is required'),
  country: Yup.string().required('Country is required'),
  grade: Yup.string().required('Grade is required'),
  email: Yup.string().required('Email is required').email('That is not an email'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], "Password's not match"),
});

const alertChoices = {'success': 'Success! Please verify your email address before logging in', 
                      'error': 'This email is already registered'}

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      schoolName: '',
      grade: '',
      country: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowVerifyPassword = () => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  const [alert, setAlert] = useState('');

  const router = useRouter()

  const onSubmit = async (data) => {
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // data['method'] = "landing";
    // fetch(`${STUDATA_API}/api/auth/register/`, {
    //   body: JSON.stringify(data),
    //   headers: {'Content-Type': 'application/json',},
    //   method: 'POST'})
    // .then(response => (response.ok? setAlert('success') : setAlert('error')))
    // reset()
  };

  return (
    <>
    <Snackbar open={alert !== ''} autoHideDuration={5000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}  onClose={() => setAlert('')}>
      <Alert severity={alert} onClose={() => setAlert('')}>
        {alertChoices[alert]}
      </Alert>

    </Snackbar>

    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        <Stack direction='row' spacing={1.5}>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="First Name"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Last Name"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />  
        </Stack>

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Email address"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Stack direction='row' spacing={1}>
          <Controller
            name="schoolName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="School"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <Stack direction='row' spacing={1}>
            <Controller
              name="country"
              control={control}
              style={{flex: 20}}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth={false}
                  label="Country"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />

              <Controller
                name="grade"
                control={control}
                style={{flex: 1}}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Grade"
                    error={Boolean(error)}
                    helperText={error?.message}
                />
              )}
            />
          </Stack>

        </Stack>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? viewIcon : viewOff} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Confirm Password"
              type={showVerifyPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowVerifyPassword} edge="end">
                      <Iconify icon={showVerifyPassword ? viewIcon : viewOff} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Register
        </LoadingButton>
      </Stack>
    </form>
    </>
  );
}
