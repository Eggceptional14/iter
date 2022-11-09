import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginPage from './login';


export default function Home() {
  return (
    <div className={styles.main}>
      {/* <Button type="button" className={styles.button}>Test</Button> */}
      <LoginPage></LoginPage>
      {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </div>
  )
}
