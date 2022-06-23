import Card from '../Components/Card'

function Content (){
    
    const cards = [
        {id: 1 , nome : "nome1" , autor : "autor1" , desc : "desc1" , genero : "genero1" , data : "data1"},
        {id: 2 , nome : "nome2" , autor : "autor2" , desc : "desc2" , genero : "genero2" , data : "data2"},
        {id: 3 , nome : "nome3" , autor : "autor3" , desc : "desc3" , genero : "genero3" , data : "data3"}
    ]
    
    return(
        <ul>
            {
                cards.map( (card) => (
                     <Card key= {card.id} conteudo={card}/>
                ))
            }
        </ul>
    )
}

export default Content