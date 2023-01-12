import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../src/components/Navbar';
import MultiCarousel from '../src/components/Carousel';

import { Button, Typography, Stack, Box, } from '@mui/material';
import { 
  PeopleAltOutlined,
  AttachMoneyOutlined,
  ThunderstormOutlined,
} from '@mui/icons-material';

export default function Home() {
  const DESCRIPTIONS =[
    {
      title: `Users`,
      icon: <PeopleAltOutlined sx={{ fontSize: "60px"}} />,
      text: `Cooperate with friends & co-travellers`,
    },
    {
      title: `Quest`,
      icon: <AttachMoneyOutlined sx={{ fontSize: "60px"}} />,
      text: `Earn from travelling by completing a quest`,
    },
    {
      title: `Weather`,
      icon: <ThunderstormOutlined sx={{ fontSize: "60px"}} />,
      text: `Generate alternate route based on the weather forecast`,
    },
  ]
  // const OrangeButton = styled(Button)({
  //   backgroundColor: 'var(--orange)',
  //   "&:hover":{
  //     backgroundColor: 'var(--orange)',
  //   },
  // })
  return (
    <>
    <Navbar />
    <div className={styles.containerMain}>
      <Typography variant='h6' sx={{ width:'13em', textAlign:'center', fontSize:15, fontWeight:600 }}>
        An organized way to plan a trip with your friends !
      </Typography>

      <Button variant='contained' sx={{ 
        backgroundColor:'var(--orange)',
        "&:hover":{
          backgroundColor:'var(--orange)',
        },
        borderRadius:'20px',
        padding:'0.5em 3em 0.5em 3em',
        mt:'1em',
        fontWeight:600,
      }}>Start Planning!</Button>

      <Stack direction="row" spacing={25} sx={{ mt:'4em' }}>
        {DESCRIPTIONS.map((value, index) => (
            <DescriptionItem key={value.title} value={value} index={index} />
        ))}
      </Stack>

      <Stack direction="row" spacing={1} sx={{ mt:'4em' }}>
        <h1 style={{ color:'var(--orange)', fontSize:50, fontWeight:'650', letterSpacing:1.2 }}>Trending</h1>
        <h1 style={{ color:'var(--black)', fontSize:50, fontWeight:'650', letterSpacing:1.2 }}>Destination</h1>
      </Stack>

      <MultiCarousel />
    </div>
  </>
  )
}

function DescriptionItem({ value, index }) {
  return (
    <div>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          mt: '2em' 
        }}
      >
        {value.icon}
        <Typography variant='h7' style={{ fontSize:15, width:"170px", textAlign:'center' }}>
          {value.text}
        </Typography>
      </Box >
    </div>
  );
}

    /* // <div className={styles.main}>
    //   {/* <LoginPage></LoginPage> */
    //   <Navbar />
    // </div> */}