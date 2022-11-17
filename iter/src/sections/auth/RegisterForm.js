import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/router';

// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// next
import NextLink from 'next/link';
// @mui
import { LoadingButton } from '@mui/lab';
import { ButtonUnstyled, InputUnstyled } from '@mui/base';
import { 
  Button, 
  Stack, 
  Snackbar, 
  Alert, 
  Select,
  Link, 
  TextField, 
  IconButton, 
  InputAdornment, 
  Divider 
} from '@mui/material';
// routes
// import Routes from '../../routes';
// components
import Iconify from '../../components/Iconify';
// styles
import styles from '../../../styles/Auth.module.css'
import { faApple, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(3, 'Mininum 3 characters')
    .max(15, 'Maximum 15 characters'),
  lastName: Yup.string()
  .required('First name is required')
  .min(3, 'Mininum 3 characters')
  .max(15, 'Maximum 15 characters'),
  email: Yup.string().required('Email is required').email('That is not an email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
  confirmPassword: Yup.string()
  .required('Confirm password is required')
  .oneOf([Yup.ref('password')], "Password's not match"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const router = useRouter()

  const [alert, setAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const onSubmit = async (data) => {
  };

  return (

    <>
    <Snackbar open={alert !== ''} autoHideDuration={5000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}  onClose={() => setAlert('')}>
      <Alert severity={alert} onClose={() => setAlert('')}>
        {alertMessage}
      </Alert>
    </Snackbar>

    <form onSubmit={handleSubmit(onSubmit)} className={styles['container1']}>
        <div className={styles['container1']}>
            <span className={styles['text-header-white']}>Join Our Community</span>
            <hr size='6' className={styles['line1']} style={{color: 'var(--light-ivory)', borderColor: 'var(--light-ivory)', backgroundColor: 'var(--light-ivory)'}}/>
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  className={styles['input-field']}
                  {...field}
                  fullWidth
                  InputLabelProps={{className: styles['input-label']}}
                  InputProps={{className: styles['input-prop']}}
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
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  className={styles['input-field']}
                  {...field}
                  fullWidth
                  InputLabelProps={{className: styles['input-label']}}
                  InputProps={{className: styles['input-prop']}}
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
                  id="outlined-basic" 
                  label="Password" 
                  variant="outlined" 
                  className={styles['input-field']}
                  {...field}
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  InputLabelProps={{className: styles['input-label']}}
                  InputProps={{
                    className: styles['input-prop'],
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
                  id="outlined-basic" 
                  label="Confirm Password" 
                  variant="outlined" 
                  className={styles['input-field']}
                  {...field}
                  fullWidth
                  type={showConfirmPassword ? 'text' : 'password'}
                  InputLabelProps={{className: styles['input-label']}}
                  InputProps={{
                    className: styles['input-prop'],
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowConfirmPassword} edge="end">
                          <Iconify icon={showConfirmPassword ? viewIcon : viewOff} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(error)}
                  helperText={error?.message}
                />
                
              )}
            />

            <Button type="button" style={{marginBottom: '15px'}} className={[styles['button-prim'], styles['button-prim-revert']].join(" ")}>
                Sign Up
            </Button>
            <Divider style={{width:'90%', color:'white'}}>or login using</Divider>
            <div className={styles['container3']}>
                    <IconButton className={styles['button-icon']}>
                    <FontAwesomeIcon icon={faApple} style={{color: 'black'}}/>
                    </IconButton>
                    <IconButton className={styles['button-icon']}>
                    <FontAwesomeIcon icon={faGoogle} style={{color: '#DB4437'}}/>
                    </IconButton>
                    <IconButton className={styles['button-icon']}>
                    <FontAwesomeIcon icon={faFacebook} style={{color: '#4267B2'}}/>
                    </IconButton>
            </div>
            <div className={styles['container4']}>
                <span style={{fontSize: '18px'}}>New to Iter?</span>
                <ButtonUnstyled type="button" varient="text" className={[styles['button-text'], styles['button-text2']].join(" ")} style={{margin: 0}}>
                    Register now
                </ButtonUnstyled>
            </div>
        </div>
    </form>

    {/* <form onSubmit={handleSubmit(onSubmit)}>
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

        <NextLink href={'/'} passHref>
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
    </form> */}
    </>
  );
}
