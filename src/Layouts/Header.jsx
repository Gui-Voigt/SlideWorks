import Navbar from '../Components/Navbar'
import styles from '../Styles/Header.module.css'
import logo from '../Images/logo.svg'
import {BrowserRouter as Router} from 'react-router-dom'

function Header (){
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logotipo da Bibble"/>
            <Router><Navbar/></Router>
        </header>
    )
}

export default Header