import Card from '../Components/Card'
import api from '../Services/api'
import styles from '../Styles/Content.module.css'

import {useEffect, useState} from 'react'

function Content (){
    
    const [cards, setCards] = useState([])
    
    useEffect( () => {
        api
        .get("/api/v1/books")
        .then( (result) => {
                setCards(result.data.data)
            }
        )
        .catch( (err) => ("Ops!, An error ocourr" + err) )
    }, [])

    
cards.length = 8

    return(
        <content>
            <ul>
                {cards.map( (card) => (
                    <Card key={card.id} conteudo={card}/>
                    ))}
            </ul>
        </content>
    )
}

export default Content

