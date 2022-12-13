import styles from '../styles/Landing.module.css';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginPage from './auth/login';
import Navbar from '../src/components/Navbar';
// import Carousel from '../src/components/Carousel';
import Slider from '../src/components/Slider';

export default function Home() {
  return (
    // <div className={styles.main}>
    <div>
      {/* <LoginPage></LoginPage> */}
      <Navbar />
      <div className={styles['main']} style={{backgroundColor: 'var(--light-ivory)'}}>
        <div className={styles['container-2']} style={{backgroundColor: 'var(--light-ivory)'}}>
          <h2 style={{fontSize: '16px'}}>An organized way to plan a trip with your friends !</h2>
          <Button 
            type="button" 
            className={styles['button-sec']}
          >
            Start Planning!
          </Button>
        </div>
        {/* <Carousel /> */}
      </div>

    </div>
  )
}
