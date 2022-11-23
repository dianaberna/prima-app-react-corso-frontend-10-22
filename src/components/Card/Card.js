import "./style.css"
import imgcaffe from "./caffe.jpg"
import imgcaffe2 from "./caffe.webp"
import Button from "../Button/Button";

// compontente -> funzione
// props -> parametri della funzione -> oggetto

// function Card({ colore }) 
// function Card( props ) -> props.colore

function Card({ colore, dati }){
    // "card "+props.colore
    // `card ${props.tema}`
    // "card light"

    return(
        <div className={"card "+colore}>
            <div className="card-body">
               {/*  metodo 1 -> fare l'import dell'immagine che si trova nella nostra cartella del componente ( dentro alla cartella src) */}
                <img src={dati.cover.src} alt={dati.cover.alt} />
              {/*   <img src={imgcaffe2} alt="caffe" /> */}
               {/*  metodo 2 -> inserire l'immagina nella cartella public  */}
                {/* <img src="./assets/caffepublic.jpeg" alt="caffe" /> */}
                <div>
                    <h1>{dati.id} - {dati.title}</h1>
                    <p>{dati.price}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="etichette">
                    {/* se etichette esiste allora fammi la map dell'array etichette */}
                    {dati.etichette && dati.etichette.map((valore, indice) => <span key={indice}>{valore}</span>)}
                </div>
                <Button>{dati.buttonTitle}</Button>
            </div>
        </div>
    )
}

export default Card;