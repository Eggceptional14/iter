import styles from '../styles/Landing.module.css';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginPage from './auth/login';
import Navbar from '../src/components/Navbar';
// import Carousel from '../src/components/Carousel';
import SimpleSlider from '../src/components/Carousel';
import Curve from '../src/assets/Curve.svg'

//icons
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    // <div className={styles.main}>
    <div>
      {/* <LoginPage></LoginPage> */}
      <Navbar />
      <div style={{backgroundColor: 'var(--light-ivory)'}}>
        <div className={styles['container-2']} style={{backgroundColor: 'var(--light-ivory)'}}>
          <div style={{verticalAlign:'middle', maxWidth: '250px'}}>
            <h2 style={{fontSize: '20px', fontWeight:'600', marginBottom:'20px', marginTop: '30px'}}>An organized way to plan a trip with your friends !</h2>
            <Button 
              type="button" 
              className={styles['button-plain']}
            >
              Start Planning!
            </Button>
          </div>
          <div style={{display:'flex', alignItems:'flex-start', marginTop: 90, color: 'var(--blue)'}}>
            <div style={{maxWidth: '170px', marginRight: '120px'}}>
              <PeopleOutlineOutlinedIcon style={{fontSize:'55px'}}/>
              <h2 style={{fontSize: '14px', color: 'black'}}>Cooperate with friends & co-travellers</h2>
            </div>
            <div style={{maxWidth: '170px', marginRight: '120px'}}>
              <AttachMoneyOutlinedIcon style={{fontSize:'55px'}}/>
              <h2 style={{fontSize: '14px', color: 'black'}}>Earn from travelling by completing a quest</h2>
            </div>
            <div style={{maxWidth: '170px'}}>
              <ThunderstormOutlinedIcon style={{fontSize:'55px'}}/>
              <h2 style={{fontSize: '14px', color: 'black'}}>Generate alternate route based on the weather forecast</h2>
            </div>
          </div>
        </div>
        <div style={{display:'flex', justifyContent: 'center', marginTop: 60, marginBottom: 20}}>
              <h1 style={{ color:'var(--orange)', fontWeight: '3000', marginRight: '10px'}}>Trending</h1>
              <h1 style={{ fontWeight: '3000'}}>Destination</h1>
          </div>
        <SimpleSlider />
      </div>
    </div>
  )
}
