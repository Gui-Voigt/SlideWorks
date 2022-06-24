import styles from '../Styles/Card.module.css'

function Card ({conteudo}){

function reformData (data){
    const dataSplited = data.split("-")

    const day = dataSplited[2]
    const mounthsList = [ "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
    const mounth = mounthsList[parseInt(dataSplited[1]) - 1]
    const year = (dataSplited[0].split(""))[2] + (dataSplited[0].split(""))[3]

    const redata = (day + " " + mounth + ". " + year)
    return(redata)
}

return(
        <li className={styles.card}> 
            <div>

                <img src={conteudo.image}></img>
                <p>{conteudo.title}</p>
                <p>{conteudo.author}</p>
                <p className={styles.description}>{conteudo.description}</p>

                <div className={styles.cardBottom}>
                    <p>{conteudo.genre}</p>
                    <p>{reformData(conteudo.published)}</p>
                </div>

            </div>
        </li>
    )
}

export default Card
                
                