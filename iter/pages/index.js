import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginPage from './auth/login';


export default function Home() {
  return (
    <div className={styles.main}>
      <LoginPage></LoginPage>
    </div>
  )
}
