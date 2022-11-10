import { TextField, Button } from '@mui/material';
import { ButtonUnstyled } from '@mui/base';
import { TextField, Button, IconButton } from '@mui/material';
import { ButtonUnstyled, InputUnstyled } from '@mui/base';
import { faApple, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Login.module.css'


export default function LoginPage() {
    return (
        <div className={styles['main']}>
            <div className={styles['container2']}>
                <svg width="252" height="280" viewBox="0 0 252 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M125.55 241.1C169.484 241.1 205.1 205.484 205.1 161.55C205.1 117.616 169.484 82 125.55 82C81.6157 82 46 117.616 46 161.55C46 205.484 81.6157 241.1 125.55 241.1Z" fill="#EB6841"/>
                    <path d="M85 75H92.2511C92.2511 75 118.081 106.096 128.041 144.5C138 182.904 138 214 138 214H118.052C118.052 214 122.362 188.587 111.471 144.5C101.715 104.838 85 75 85 75Z" fill="#A26E3D"/>
                    <path d="M94.0854 111.038L114.819 96.1468" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M103.288 133.599L124.254 121.183" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M111.732 153.522L132.466 146.056" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M114.82 179.734L138.058 176.001" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M31.5826 118.26L43.0053 125.743L57.1136 112.674L50.5249 100.714L61.9476 108.198L76.056 95.1277L69.4673 83.1679L80.89 90.6517L94.1031 78.4055C83.0743 66.4814 58.6533 71.2081 39.5677 88.8972C20.4821 106.586 13.9293 130.542 24.9581 142.466L38.1712 130.219L31.5826 118.26Z" fill="#37AA37"/>
                    <path d="M115.946 67.1618L118.381 80.5898L137.574 81.8072L141.692 68.809L144.127 82.2369L163.32 83.4544L167.438 70.4561L169.872 83.8841L187.848 85.0299C188.886 68.809 168.655 54.3426 142.694 52.6954C116.734 51.0483 94.8192 62.8291 93.7808 79.05L111.792 80.1601L115.946 67.1618Z" fill="#1F871F"/>
                    <path d="M21.8786 61.898L24.4926 75.2902L43.7214 76.257L47.6961 63.1871L50.31 76.5793L69.5389 77.5461L73.5135 64.4762L76.1275 77.8683L94.1031 78.7994C94.9266 62.5784 74.5162 48.3627 48.5555 47.0378C22.5948 45.7129 0.823581 57.7801 0 74.0011L17.9755 74.9321L21.8786 61.898Z" fill="#1F871F"/>
                    <path d="M96.1083 53.9845L108.641 59.3915L120.314 44.1015L111.756 33.4666L124.289 38.8736L135.962 23.5836L127.404 12.9487L139.937 18.3557L150.823 4.03253C137.896 -5.81463 114.657 2.9941 98.9013 23.691C83.1458 44.388 80.8183 69.167 93.745 78.9784L104.666 64.6553L96.1083 53.9845Z" fill="#37AA37"/>
                    <path d="M180.242 135.6H171.696C171.696 135.6 141.275 161.891 129.541 194.315C117.806 226.74 117.806 253.031 117.806 253.031H141.275C141.275 253.031 136.205 231.565 149.003 194.315C160.575 160.828 180.242 135.6 180.242 135.6Z" fill="#A26E3D"/>
                    <path d="M124.185 195.419L155.055 202.166" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M131.667 171.05L162.088 180.741" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M146.877 150.851L170.92 161.687" stroke="#8B523E" stroke-width="12.4179" stroke-miterlimit="10"/>
                    <path d="M198.969 193.375L188.951 195.419L182.777 182.417L190.669 175.957L180.651 178.001L174.477 164.999L182.368 158.538L172.351 160.583L166.585 148.439C177.543 143.246 193.204 153.264 201.545 170.846C209.886 188.428 207.76 206.868 196.802 212.102L191.037 199.958L198.969 193.375Z" fill="#37AA37"/>
                    <path d="M150.312 139.28L148.472 149.339L134.12 150.238L131.053 140.507L129.213 150.565L114.862 151.465L111.795 141.733L109.955 151.792L96.5438 152.651C95.7669 140.548 110.895 129.712 130.276 128.486C149.698 127.259 166.054 136.05 166.83 148.153L153.419 149.012L150.312 139.28Z" fill="#1F871F"/>
                    <path d="M220.599 135.355L218.636 145.372L204.284 146.108L201.34 136.336L199.378 146.354L185.026 147.09L182.082 137.318L180.119 147.335L166.667 148.03C166.054 135.927 181.305 125.296 200.727 124.274C220.149 123.293 236.381 132.288 237.036 144.432L223.583 145.127L220.599 135.355Z" fill="#1F871F"/>
                    <path d="M165.113 129.426L155.75 133.474L147.041 122.025L153.419 114.052L144.056 118.1L135.347 106.651L141.725 98.6783L132.362 102.726L124.225 92.0135C133.875 84.6536 151.252 91.2366 163.028 106.733C174.804 122.189 176.521 140.711 166.871 148.071L158.735 137.399L165.113 129.426Z" fill="#37AA37"/>
                    <path d="M251.75 279.931C233.15 237.081 183.8 206.431 125.85 206.431C67.9 206.431 18.6 237.081 0 279.931H125.875H251.75Z" fill="#F8DF88"/>
                </svg>
                <span className={styles['text-light']}>Don't have an account?</span>
                <span className={styles['text-light']}>Join us</span>
                <Button type="button" className={styles['button-sec']}>
                    Sign Up
                </Button>
            </div>
            <div className={styles['container1']}>
                <span>Sign In to Your Account</span>
                <hr size='6' width='150'/>
                <TextField
                    id="outlined-basic" 
                    label="Email"
                    variant="outlined"
                    className={styles['input-field']}
                />
                <TextField
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                    className={styles['input-field']}
                />
                <Button type="button" className={styles['button-prim']}>
                    Sign In
                </Button>
                <ButtonUnstyled type="button" varient="text" className={styles['button-text']}>
                    Forgot Your Password?
                </ButtonUnstyled>
                <div className={styles['container3']}>
                    <hr size='5' width='150'/>
                    <span>or login using</span>
                    <hr size='5' width='150'/>
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
            </div>
        </div>
    )
}