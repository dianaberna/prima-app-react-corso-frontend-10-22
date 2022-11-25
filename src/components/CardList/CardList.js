import Card from "../Card/Card"
import jsonCards from '../Card/dati.json'
import "./CardList.css"

function CardList() {
    return(
        <div className="cardlist">
            {/* <Card key={elementi.id} id={elementi.id} etichette={elementi.etichette} colore={props.tema} titolo={elementi.title} price={elementi.price} titoloPulsante={elementi.buttonTitle} immagine={elementi.cover}/> */}
            {jsonCards.cards.map((elementi) => (
                <Card key={elementi.id} dati={elementi}/>
            ))}
        </div>
        
    )
}

export default CardList