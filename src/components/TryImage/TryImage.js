import logo from "./logo.svg"
import { ReactComponent as LogoReact } from "./logo.svg"
import "./TryImage.css"

function TryImage(){
    return (
        <div className="tryimage">
            {/* metodo 1-2 per importare l'immagine */}
            <img src={logo} />
            {/* se l'immagine è un svg abbiamo un 3 metodo -> far finta che il nostro svg sia un componente*/}
            <LogoReact/>
        </div>
    )
}

export default TryImage;