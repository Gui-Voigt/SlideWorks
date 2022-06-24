import styles from '../Styles/Card.module.css'

function Card (props){

return(
        <li className={styles.card}> 
            <div>

                <img src={props.conteudo.image}></img>
                <p>{props.conteudo.title}</p>
                <p>{props.conteudo.author}</p>
                <p className={styles.description}>{props.conteudo.description}</p>

                <div className={styles.cardBottom}>
                    <p>{props.conteudo.genre}</p>
                    <p>{props.conteudo.published}</p>
                </div>

            </div>
        </li>
    )
}

export default Card
                
                