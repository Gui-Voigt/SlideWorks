import styles from '../Styles/FooterBottom.module.css'
import face from '../Images/face.svg'
import twitter from '../Images/twitter.svg'
import instagram from '../Images/instagram.svg'

const facelink = "https://www.facebook.com/profile.php?id=100011160456845"
const twitterlink = "https://twitter.com/"
const instalink = "https://www.instagram.com/g_voigt/"


function FooterBottom (){
    return(
        <div className={styles.footerBottom}>
            <div className={styles.footerLeft}>
                <a href=''><p> Terms &#38; Conditions </p></a>
                <a href=''><p> Privacy Policy </p></a>
            </div>

            <div className={styles.footerRight}>
                <a href={facelink} target="blank"><img src={face} alt="logotipo facebook" /></a>
                <a href={twitterlink} target="blank"><img src={twitter} alt="logotipo twitter" /></a>
                <a href={instalink} target="blank"><img src={instagram} alt="logotipo instagram" /></a>
            </div>
       </div>
    )
}

export default FooterBottom