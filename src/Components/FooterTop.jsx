import styles from '../Styles/FooterTop.module.css'
import logo from '../Images/logoFooter.svg'

function FooterTop(){
    return(
        <div className={styles.footerTop}>

            <img src={logo} alt="Logotipo da Libslide" />

        </div>
    )
}

export default FooterTop