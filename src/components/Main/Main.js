import Card from '../Card/Card'
import jsonCards from '../Card/dati.json'

function Main(props){
    let array = [1, 2, 3, 4]
    let arrayStringhe = ["prova1", "prova2"]
    return(
        <main>
            <h2>{props.titolo}</h2>
            {array}
            {arrayStringhe}
            {array.map((valore, index) => (
                <p key={index}>{valore}</p>
            ))}
            {/* qui ci sarà la nostra card */}
            {/* <Card colore={props.tema} titolo="Ciao mondo"/> */}
            {/* stampiamo le card del json */}
            
            {/* <Card key={elementi.id} id={elementi.id} etichette={elementi.etichette} colore={props.tema} titolo={elementi.title} price={elementi.price} titoloPulsante={elementi.buttonTitle} immagine={elementi.cover}/> */}
            {jsonCards.cards.map((elementi) => (
                <Card key={elementi.id} colore={props.tema} dati={elementi} />
            ))}
            
        </main>
    )
}

export default Main;

// al Main non interessa il tema, lo andiamo a propagare al suo figlio, cioè Card