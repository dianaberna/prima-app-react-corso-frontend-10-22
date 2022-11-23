import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./Layout.css"

function Layout(){
    let titoloMain = "il mio titolo"
    return(
        <div className="container"> 
            <Header/>
            <Main tema="light" titolo={titoloMain}/>
            <Footer/>
        </div>
    )
}

export default Layout;

/*

compontente genitore -> componente figlio -> componente nipote
Layout -> Main -> Card
Layout abbiamo il componente Main a cui passiamo l'attributo tema=light
Main -> i nostri attributi vanno a finire nel parametro props (props ha una struttura ad oggetto) tema=light
Card -> recuperare l'informazione dell'attributo tema=light tramite il parametro props tema=light 

Layout -> Main
in Layout ho titoloMain = "il mio titolo" -> attributo titolo nel Main

*/