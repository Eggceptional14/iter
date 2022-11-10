// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Stack, Divider, Container, Typography } from '@mui/material';
// routes
// import Routes from '../../src/routes';
// layouts
// import Layout from '../../src/layouts';
// components
import Page from '../../src/components/Page';
import Image from '../../src/components/Image';

// import {Image, Page} from '../../src/components';
import RegisterForm from '../../src/sections/RegisterForm';
// import Form from '../../src/assets/images'
import styles from '../../styles/Login.module.css'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
    height: '100vh',
    width: '150vh'
  },
}));

// ----------------------------------------------------------------------

export default function RegisterIllustrationPage() {
  return (
    <Page title="Register Illustration">
      <RootStyle>
        <Container>
          <Grid container spacing={5} justifyContent="space-between" sx={{backgroundColor: '#56beec'}}>
            <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block'}}}>
            <svg width="349" height="331" viewBox="0 0 349 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M197.95 289.181C241.884 289.181 277.5 253.565 277.5 209.631C277.5 165.697 241.884 130.081 197.95 130.081C154.016 130.081 118.4 165.697 118.4 209.631C118.4 253.565 154.016 289.181 197.95 289.181Z" fill="#EB6841"/>
                    <path d="M111.45 93.0308H123.9C123.9 93.0308 168.25 131.331 185.35 178.631C202.45 225.931 202.45 264.231 202.45 264.231H168.2C168.2 264.231 175.6 232.931 156.9 178.631C140.15 129.781 111.45 93.0308 111.45 93.0308Z" fill="#A26E3D"/>
                    <path d="M127.05 137.081L162.65 118.731" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M142.85 164.881L178.85 149.581" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M157.35 189.431L192.95 180.231" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M162.65 221.731L202.55 217.131" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M44.1 165.131L60.05 175.581L79.75 157.331L70.55 140.631L86.5 151.081L106.2 132.831L97 116.131L112.95 126.581L131.4 109.481C116 92.8308 81.9 99.4308 55.25 124.131C28.6 148.831 19.45 182.281 34.85 198.931L53.3 181.831L44.1 165.131Z" fill="#37AA37"/>
                    <path d="M161.9 93.7808L165.3 112.531L192.1 114.231L197.85 96.0808L201.25 114.831L228.05 116.531L233.8 98.3808L237.2 117.131L262.3 118.731C263.75 96.0808 235.5 75.8808 199.25 73.5808C163 71.2808 132.4 87.7308 130.95 110.381L156.1 111.931L161.9 93.7808Z" fill="#1F871F"/>
                    <path d="M30.55 86.4308L34.2 105.131L61.05 106.481L66.6 88.2308L70.25 106.931L97.1 108.281L102.65 90.0308L106.3 108.731L131.4 110.031C132.55 87.3808 104.05 67.5308 67.8 65.6808C31.55 63.8308 1.15 80.6808 0 103.331L25.1 104.631L30.55 86.4308Z" fill="#1F871F"/>
                    <path d="M134.2 75.3808L151.7 82.9308L168 61.5808L156.05 46.7308L173.55 54.2808L189.85 32.9308L177.9 18.0808L195.4 25.6308L210.6 5.63079C192.55 -8.11921 160.1 4.18079 138.1 33.0808C116.1 61.9808 112.85 96.5808 130.9 110.281L146.15 90.2808L134.2 75.3808Z" fill="#37AA37"/>
                    <path d="M278.9 160.431H268.45C268.45 160.431 231.25 192.581 216.9 232.231C202.55 271.881 202.55 304.031 202.55 304.031H231.25C231.25 304.031 225.05 277.781 240.7 232.231C254.85 191.281 278.9 160.431 278.9 160.431Z" fill="#A26E3D"/>
                    <path d="M210.35 233.581L248.1 241.831" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M219.5 203.781L256.7 215.631" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M238.1 179.081L267.5 192.331" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M301.8 231.081L289.55 233.581L282 217.681L291.65 209.781L279.4 212.281L271.85 196.381L281.5 188.481L269.25 190.981L262.2 176.131C275.6 169.781 294.75 182.031 304.95 203.531C315.15 225.031 312.55 247.581 299.15 253.981L292.1 239.131L301.8 231.081Z" fill="#37AA37"/>
                    <path d="M242.3 164.931L240.05 177.231L222.5 178.331L218.75 166.431L216.5 178.731L198.95 179.831L195.2 167.931L192.95 180.231L176.55 181.281C175.6 166.481 194.1 153.231 217.8 151.731C241.55 150.231 261.55 160.981 262.5 175.781L246.1 176.831L242.3 164.931Z" fill="#1F871F"/>
                    <path d="M328.25 160.131L325.85 172.381L308.3 173.281L304.7 161.331L302.3 173.581L284.75 174.481L281.15 162.531L278.75 174.781L262.3 175.631C261.55 160.831 280.2 147.831 303.95 146.581C327.7 145.381 347.55 156.381 348.35 171.231L331.9 172.081L328.25 160.131Z" fill="#1F871F"/>
                    <path d="M260.4 152.881L248.95 157.831L238.3 143.831L246.1 134.081L234.65 139.031L224 125.031L231.8 115.281L220.35 120.231L210.4 107.131C222.2 98.1308 243.45 106.181 257.85 125.131C272.25 144.031 274.35 166.681 262.55 175.681L252.6 162.631L260.4 152.881Z" fill="#37AA37"/>
                    <path d="M331.75 330.931C313.15 288.081 263.8 257.431 205.85 257.431C147.9 257.431 98.6 288.081 80 330.931H205.875H331.75Z" fill="#F8DF88"/>
                </svg>
              {/* <Image
                alt="register"
                src="../../src/assets/images/palm_tree.svg"
              /> */}
            </Grid>

            <Grid item xs={12} md={50} lg={4.5} sx={{backgroundColor: '#56beec'}}>
              <Stack
                spacing={4}
                sx={{
                  p: 4,
                  textAlign: { xs: 'center', md: 'left' },
                  borderRadius: 2,
                //   boxShadow: (theme) => theme.customShadows.z24,
                  width: 570,
                  backgroundColor: '#56beec'
                }}
            
              >
                <div>
                  <Typography variant="h3" paragraph>
                    Join Our Community
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Already have an account?
                    <NextLink href={''} passHref>
                      <Link variant="subtitle2" color="primary">
                        {''} Login
                      </Link>
                    </NextLink>
                  </Typography>
                </div>
                <RegisterForm />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}

