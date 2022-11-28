import { useState } from "react";
import prodottiJson from "./Products.json";
import "./Shop.css";

function Shop() {
    /* console.log(prodottiJson) */
    /* let spesaTotale = 0 */
    /* let quantitaTotale = 0 */
    const [spesaTotale, setSpesaTotale] = useState(0);
    const [quantitaTotale, setQuantitaTotale] = useState(0);
    const [carrello, setCarrello] = useState([]);

    /* 
        la funzione che ci serve per cercare un elemento in un array di oggetti
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

        const array1 = [{id: 5, quantita: 1}, {id: 12, quantita: 1 }, {id: 8,  quantita: 1}, {id: 130,  quantita: 1}];
        const found = array1.findIndex(element => element.id == 9);
        console.log(found)
    */

    // carello -> array di oggetti, ogni prodotto è un oggetto con proprietà  {id, quantità, prezzoSingolo} -> per il prodotto con quel id spendiamo prezzoSingolo*quantita
    // per ogni prodotto -> {nome/id/descrizione,  quantità,  prezzoSingolo}

    const handleClick = (id) => {
        /* quantitaTotale++ */
        setQuantitaTotale(quantitaTotale + 1);
        setSpesaTotale(spesaTotale + prodottiJson[id].price);

        console.log("sono nel handleclick ")
        // aggiorniamo il carrello
        // se il prodotto esiste già nel carrello -> allora aggiorno la quantità e la spesa totale
        // dobbiamo cercare se l'id esiste già nel carrello 

        let indiceElemento = carrello.findIndex((el) => el.id === id);
        let carrelloTemporaneo
       
        if(indiceElemento != -1 ){
            // esiste già un elemento con questo id, quindi aggiorno la quantita
            /*  console.log("esite già -> "+id) */
            carrelloTemporaneo = [...carrello]
            let elementoTemporaneo = carrelloTemporaneo[id]
            elementoTemporaneo.quantita ++  
        }else{
            // altrimenti aggiungo il nuovo elemento 
            /* console.log("non esiste -> "+id) */
            // se il prodotto NON esiste già nel carrello -> allora creo un nuovo oggetto nell'array carrello con id, quantita=1, prezzoSingolo
            let nuovoElemento = {
                id: id,
                quantita: 1,
                prezzoSingolo: prodottiJson[id].price,
            }
            console.log(nuovoElemento)
            carrelloTemporaneo = [...carrello, nuovoElemento]; 
        } 
        setCarrello(carrelloTemporaneo)
           
    };

    return (
        <>
            <h2>Shop</h2>
            <ul>
                Carrello:
                {carrello.map((elemento, indice) => (
                    <li key={indice}>Prodotto: id= {elemento.id} - Quantità={elemento.quantita} - Prezzo={elemento.prezzoSingolo} - SpesaTotale={elemento.quantita*elemento.prezzoSingolo}</li>
                ))}
            </ul>
            <p>Spesa totale: {spesaTotale}</p>
            <p>Quantità totale: {quantitaTotale}</p>
            <div className="shop">
                {prodottiJson.map((prodotto) => (
                    <div key={prodotto.id} className="item">
                        <img src={prodotto.image} />
                        <h3>{prodotto.title}</h3>
                        <p>{prodotto.price}</p>
                        <button onClick={() => handleClick(prodotto.id)}>
                            Aggiungi
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shop;
