function Card ( {conteudo} ){
    return(
        <li>
            <div>
                <p> imagem aqui </p>
                <p>{conteudo.nome}</p>
                <p>{conteudo.autor}</p>
                <p>{conteudo.desc}</p>
                <div>
                    <p>{conteudo.genero}</p>
                    <p>{conteudo.data}</p>
                </div>
            </div>
        </li>
    )
}

export default Card