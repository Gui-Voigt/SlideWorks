import styles from '../Styles/Navbar.module.css'
import search from '../Images/search.svg'

function Navbar (){
    return(
        <nav className={styles.navbar}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Gallery</li>
                <li>Team</li>
                <li><img src={search} alt="Símbolo de pesquisa" /></li>
            </ul>
        </nav>
    )
}

export default Navbar