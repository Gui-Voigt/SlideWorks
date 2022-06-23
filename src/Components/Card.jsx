function Card (props){

return(
        <li> 
            <div>
                <img src={props.conteudo.image}></img>
                <p>{props.conteudo.title}</p>
                <p>{props.conteudo.author}</p>
                <p>{props.conteudo.description}</p>
                <div>
                    <p>{props.conteudo.gender}</p>
                    <p>{props.conteudo.published}</p>
                </div>
            </div>
        </li>
    )
}

export default Card
                
                