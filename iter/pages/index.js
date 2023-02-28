import React from 'react';
import { useRouter, Router } from 'next/router';
import styles from '../styles/Home.module.css';
import Navbar from '../src/components/Navbar';
import MultiCarousel from '../src/components/Carousel';
import Section_1 from '../styles/Section_1.svg'
 

import { Button, Typography, Stack, Box } from '@mui/material';
import {
  PeopleAltOutlined,
  AttachMoneyOutlined,
  ThunderstormOutlined,
} from '@mui/icons-material';

const DESCRIPTIONS = [
  {
    title: `Users`,
    icon: <PeopleAltOutlined sx={{ fontSize: '60px' }} />,
    text: `Cooperate with friends & co-travellers`,
  },
  {
    title: `Quest`,
    icon: <AttachMoneyOutlined sx={{ fontSize: '60px' }} />,
    text: `Earn from travelling by completing a quest`,
  },
  {
    title: `Weather`,
    icon: <ThunderstormOutlined sx={{ fontSize: '60px' }} />,
    text: `Generate alternate route based on the weather forecast`,
  },
];

const svgCode = `
<svg width="1440" height="590" viewBox="0 0 1440 590" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_97_180)">
<path d="M1449.74 416.861L1414.86 410.966C1379.88 405.009 1310.11 393.219 1240.69 393.196C1171.26 393.172 1102.18 405.042 1032.81 408.089C963.448 411.199 893.809 405.549 824.03 397.983C754.251 390.416 684.535 380.929 615.06 388.584C545.586 396.303 476.553 421.097 407.27 428.236C337.987 435.376 268.454 424.861 198.986 422.727C129.518 420.593 60.1158 426.839 25.3147 430.028L-9.38646 433.151L-11.1204 346.17L23.6292 345.477C58.48 344.782 127.979 343.397 197.377 342.013C266.774 340.63 336.071 339.249 405.469 337.865C474.866 336.482 544.365 335.096 613.966 333.709C683.566 332.322 753.065 330.936 822.665 329.549C892.266 328.161 961.765 326.776 1031.16 325.392C1100.56 324.009 1169.86 322.628 1239.25 321.244C1308.65 319.861 1378.15 318.475 1413 317.781L1447.75 317.088L1449.74 416.861Z" fill="#56BEEC"/>
</g>
<g clip-path="url(#clip1_97_180)">
<path d="M-0.487544 178.225L33.8125 176.088C68.2125 173.896 136.812 169.623 205.312 164.731C273.812 159.84 342.212 154.443 410.712 154.78C479.212 155.173 547.812 161.358 616.512 167.992C685.212 174.683 753.812 181.767 822.512 184.24C891.212 186.658 959.813 184.409 1028.31 178.393C1096.81 172.434 1165.21 162.651 1233.71 157.141C1302.21 151.631 1370.81 150.282 1405.21 149.664L1439.51 148.989L1439.51 253.562L1405.21 253.562C1370.81 253.562 1302.21 253.562 1233.71 253.562C1165.21 253.562 1096.81 253.562 1028.31 253.562C959.813 253.562 891.212 253.562 822.512 253.562C753.812 253.562 685.212 253.562 616.512 253.562C547.812 253.562 479.212 253.562 410.712 253.563C342.212 253.563 273.812 253.563 205.312 253.563C136.812 253.563 68.2125 253.563 33.8125 253.563L-0.487531 253.563L-0.487544 178.225Z" fill="#E5F7FF"/>
<path d="M-0.487546 199.027L33.8125 198.015C68.2125 196.947 136.812 194.923 205.312 193.854C273.812 192.842 342.212 192.842 410.712 191.887C479.212 190.987 547.812 189.075 616.512 190.425C685.212 191.718 753.812 196.216 822.512 194.529C891.212 192.842 959.813 184.971 1028.31 183.453C1096.81 181.991 1165.21 186.826 1233.71 190.481C1302.21 194.135 1370.81 196.609 1405.21 197.79L1439.51 199.027L1439.51 253.562L1405.21 253.562C1370.81 253.562 1302.21 253.562 1233.71 253.562C1165.21 253.562 1096.81 253.562 1028.31 253.562C959.813 253.562 891.212 253.562 822.512 253.562C753.812 253.562 685.212 253.562 616.512 253.562C547.812 253.562 479.212 253.562 410.712 253.562C342.212 253.562 273.812 253.562 205.312 253.562C136.812 253.562 68.2125 253.563 33.8125 253.563L-0.487537 253.563L-0.487546 199.027Z" fill="#BAEAFF"/>
<path d="M-0.487549 184.409L33.8125 188.457C68.2124 192.449 136.812 200.545 205.312 202.569C273.812 204.649 342.212 200.714 410.712 201.163C479.212 201.669 547.812 206.504 616.512 208.191C685.212 209.878 753.812 208.416 822.512 206.898C891.212 205.38 959.813 203.918 1028.31 204.93C1096.81 205.942 1165.21 209.54 1233.71 208.135C1302.21 206.729 1370.81 200.32 1405.21 197.171L1439.51 193.967L1439.51 253.562L1405.21 253.562C1370.81 253.562 1302.21 253.562 1233.71 253.562C1165.21 253.562 1096.81 253.562 1028.31 253.562C959.813 253.562 891.212 253.562 822.512 253.562C753.812 253.562 685.212 253.562 616.512 253.562C547.812 253.562 479.212 253.562 410.712 253.562C342.212 253.562 273.812 253.562 205.312 253.562C136.812 253.562 68.2125 253.563 33.8125 253.563L-0.487537 253.563L-0.487549 184.409Z" fill="#9BDDFB"/>
<path d="M-0.487548 212.52L33.8125 211.677C68.2124 210.834 136.812 209.147 205.312 210.946C273.812 212.689 342.212 217.974 410.712 217.187C479.212 216.456 547.812 209.709 616.512 208.303C685.212 206.898 753.812 210.833 822.512 212.351C891.212 213.813 959.813 212.914 1028.31 210.946C1096.81 208.978 1165.21 205.942 1233.71 205.211C1302.21 204.48 1370.81 205.942 1405.21 206.729L1439.51 207.46L1439.51 253.562L1405.21 253.562C1370.81 253.562 1302.21 253.562 1233.71 253.562C1165.21 253.562 1096.81 253.562 1028.31 253.562C959.813 253.562 891.212 253.562 822.512 253.562C753.812 253.562 685.212 253.562 616.512 253.562C547.812 253.562 479.212 253.562 410.712 253.562C342.212 253.562 273.812 253.562 205.312 253.562C136.812 253.562 68.2125 253.562 33.8125 253.563L-0.48754 253.563L-0.487548 212.52Z" fill="#82D4F4"/>
<path d="M-0.487549 225.451L33.8125 225.564C68.2124 225.62 136.812 225.845 205.312 228.15C273.812 230.511 342.212 235.009 410.712 235.684C479.212 236.302 547.812 233.154 616.512 232.198C685.212 231.242 753.812 232.591 822.512 234.166C891.212 235.74 959.813 237.651 1028.31 238.832C1096.81 240.069 1165.21 240.631 1233.71 240.35C1302.21 240.069 1370.81 238.944 1405.21 238.382L1439.51 237.82L1439.51 253.562L1405.21 253.562C1370.81 253.562 1302.21 253.562 1233.71 253.562C1165.21 253.562 1096.81 253.562 1028.31 253.562C959.813 253.562 891.212 253.562 822.512 253.562C753.812 253.562 685.212 253.562 616.512 253.562C547.812 253.562 479.212 253.562 410.712 253.562C342.212 253.562 273.812 253.562 205.312 253.562C136.812 253.562 68.2125 253.562 33.8125 253.562L-0.487544 253.562L-0.487549 225.451Z" fill="#56BEEC"/>
</g>
<rect x="-0.487549" y="236" width="1440" height="142" fill="#56BEEC"/>
<defs>
<clipPath id="clip0_97_180">
<rect width="1459.16" height="287.863" fill="white" transform="translate(1452.61 560.764) rotate(178.858)"/>
</clipPath>
<clipPath id="clip1_97_180">
<rect width="1440" height="253" fill="white" transform="translate(-0.487549 0.000244141)"/>
</clipPath>
</defs>
</svg>
`;

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.containerMain}>
        <Typography
          variant="h6"
          sx={{
            width: '100%',
            textAlign: 'center',
            fontSize: {
              xs: '1rem',
              md: '1.2rem'
            },
            fontWeight: 600,
            mt: '3rem',
          }}
        >
          An organized way to plan a trip with your friends!
        </Typography>
        <Button
          onClick={() => {
            router.push('/question/GeneralQuestion');
          }}
          variant="contained"
          sx={{
            backgroundColor: 'var(--orange)',
            '&:hover': {
              backgroundColor: 'var(--orange)',
            },
            borderRadius: '20px',
            padding: '0.5em 3em 0.5em 3em',
            mt: '1em',
            fontWeight: 600,
            zIndex: 2,
            fontSize: '1rem',
          }}
        >
          Start Planning!
        </Button>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 25 }}
          sx={{
            mt: '4em',
            zIndex: 1,
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgCode)}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          {DESCRIPTIONS.map((value, index) => (
            <DescriptionItem key={value.title} value={value} index={index} />
          ))}
        </Stack>



        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={1}
          sx={{ mt: '4em' }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'var(--orange)',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 650,
              letterSpacing: 1.2,
            }}
          >
            Trending
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'var(--black)',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 650,
              letterSpacing: 1.2,
            }}
          >
            Destination
          </Typography>
        </Stack>

        <MultiCarousel />
      </div>
    </>
  );
}

function DescriptionItem({ value, index }) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '2em',
          // color: 'var(--ivory)',
          color: 'var(--black)',
          minWidth: '200px',
          maxWidth: '250px',
        }}
      >
        {value.icon}
        <Typography
          variant='h7'
          style={{
            fontSize: 15,
            width: '170px',
            textAlign: 'center',
            // color: 'var(--ivory)',
            color: 'var(--black)',
          }}
        >
          {value.text}
        </Typography>
        <Typography
          variant='h5'
          style={{
            fontSize: 22,
            fontWeight: 600,
            width: '170px',
            textAlign: 'center',
            // color: 'var(--ivory)',
            color: 'var(--black)',
          }}
        >
          {value.title}
        </Typography>
      </Box>
    </div>
  );
}

    
