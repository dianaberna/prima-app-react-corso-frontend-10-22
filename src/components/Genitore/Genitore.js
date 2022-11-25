import { useState } from "react"
import Figlio from "../Figlio/Figlio"

function Genitore(){
    /* let numero = 0 */
    const [numero, setNumero] = useState(0)

    const handleClick = (valore) => {
        console.log("stampo valore nel genitore",valore)
        setNumero(valore)
    }

    return(
        <div>
            <h2>Esempio comunicazione Genitore-Figlio Figlio-Genitore</h2>
            <h2>Genitore</h2>
            <p>Numero genitore: {numero}</p>
            <Figlio nuovoValore={numero} handleClick={handleClick}/>
        </div>
    )
}

export default Genitore;

/* 
    numero è una variabile
    Genitore ---- numero ---->  Figlio 
                                numero = numero + 1  (numero è una props, non possiamo aggiornarla e farla tornare nel Genitore)

    numero è uno stato --> lo stato è come una variabile condivisa tra entrambi i componenti
    Genitore ---- numero, setNumero ---->   Figlio 
                                            evento --> handleEvento(numero + 1)           
    numero aggiornato
*/