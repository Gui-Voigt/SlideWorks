import styles from '../Styles/FooterBottom.module.css'
import face from '../Images/face.svg'
import twitter from '../Images/twitter.svg'
import instagram from '../Images/instagram.svg'

function FooterBottom (){
    return(
        <div className={styles.footerBottom}>
            <div className={styles.footerLeft}>
                <p> Terms &#38; Conditions </p>
                <p> Privacy Policy </p>
            </div>

            <div className={styles.footerRight}>
                <img src={face} alt="logotipo facebook" />
                <img src={twitter} alt="logotipo twitter" />
                <img src={instagram} alt="logotipo instagram" />
            </div>
       </div>
    )
}

export default FooterBottom