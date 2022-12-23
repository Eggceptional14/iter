import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginPage from './auth/login';
import Navbar from '../src/components/Navbar'
import { FaBars, FaTimes } from "react-icons/fa";


export default function Home() {
  return (
    <Navbar />
    // <div className={styles.main}>
    //   {/* <LoginPage></LoginPage> */}
    //   <Navbar />
    // </div>
  )
}
