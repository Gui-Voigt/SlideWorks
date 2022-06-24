import styles from '../Styles/Navbar.module.css'
import search from '../Images/search.svg'
import { Link } from 'react-router-dom'

function Navbar (){
    return(
        <nav className={styles.navbar}>
            <ul>
                
                <li><Link className={styles.liLink} to="/">Home</Link></li>
                <li><Link className={styles.liLink} to="/about">About</Link></li>
                <li><Link className={styles.liLink} to="/features">Features</Link></li>
                <li><Link className={styles.liLink} to="/pricing">Pricing</Link></li>
                <li><Link className={styles.liLink} to="/gallery">Gallery</Link></li>
                <li><Link className={styles.liLink} to="/team">Team</Link></li>
                <li><img src={search} alt="Símbolo de pesquisa" /></li>
            </ul>
        </nav>
    )
}

export default Navbar