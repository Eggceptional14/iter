import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { STUDATA_API } from '../../config';

// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// next
import NextLink from 'next/link';
// @mui
import { DateRangePicker, LoadingButton } from '@mui/lab';

import { Stack, Snackbar, Alert, Link, TextField, IconButton, InputAdornment } from '@mui/material';
// routes
import Routes from '../../routes';
// components
import { Iconify } from '../../components';


// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter()

  const [alert, setAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const res = await fetch(`${STUDATA_API}/api/auth/login/`, {
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json',},
      method: 'POST'})
      .then((resp) => {
            if (resp.ok) {
              setAlert('success');
              return resp.json();
          } else {
             setAlert('error');
             return resp.json();
          }
        }
      )
      .then(data => {
        if (data.access) {
        localStorage.setItem('auth', data.access);
        localStorage.setItem('refresh', data.refresh);
        localStorage.setItem('isLogin', true);
        setAlertMessage('Login success')
        router.push('/');
        } else {
          setAlertMessage(data.detail)
        }
      })

      reset();
  };

  return (

    <>
    <Snackbar open={alert !== ''} autoHideDuration={5000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}  onClose={() => setAlert('')}>
      <Alert severity={alert} onClose={() => setAlert('')}>
        {alertMessage}
      </Alert>
    </Snackbar>

    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5} alignItems="flex-end">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label={"Email address"}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

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

        <NextLink href={Routes.forgotPassword} passHref>
          <Link variant="body3" underline="always" color="text.secondary">
            Forgot password?
          </Link>
        </NextLink>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Stack>
    </form>
    </>
  );
}
