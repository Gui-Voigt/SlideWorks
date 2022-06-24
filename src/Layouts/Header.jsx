import Navbar from '../Components/Navbar'
import styles from '../Styles/Header.module.css'
import logo from '../Images/logo.svg'

function Header (){
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logotipo da Bibble"/>
            <Navbar/>
        </header>
    )
}

export default Header