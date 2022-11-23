import "./style.css"
import imgcaffe from "./caffe.jpeg"
import imgcaffe2 from "./caffe.webp"

// compontente -> funzione
// props -> parametri della funzione -> oggetto

// function Card({ colore }) 
// function Card( props ) -> props.colore

function Card({ colore, titolo }){
    // "card "+props.colore
    // `card ${props.tema}`
    // "card light"

    return(
        <div className={"card "+colore}>
            <div className="card-body">
               {/*  metodo 1 -> fare l'import dell'immagine che si trova nella nostra cartella del componente ( dentro alla cartella src) */}
                <img src={imgcaffe} alt="caffe" />
              {/*   <img src={imgcaffe2} alt="caffe" /> */}
               {/*  metodo 2 -> inserire l'immagina nella cartella public  */}
                {/* <img src="./assets/caffepublic.jpeg" alt="caffe" /> */}
                <div>
                    <h1>{titolo}</h1>
                    <p>21K</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="etichette">
                    <span>Hot</span>
                    <span>Cold</span>
                </div>
                <button>Aggiungi</button>
            </div>
        </div>
    )
}

export default Card;