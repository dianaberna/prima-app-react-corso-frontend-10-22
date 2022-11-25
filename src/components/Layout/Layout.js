import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./Layout.css"

function Layout(){
    let titoloMain = "il mio titolo"
    return(
        <div className="container"> 
            <Header>
                questo testo verrà ignorato se non viene gestito il children nel componente Header
            </Header>
            <Main titolo={titoloMain}/>
            <Footer>
                ciao sono il <span>footer</span>
            </Footer>
        </div>
    )
}

export default Layout;

/*

    compontente genitore -> componente figlio -> componente nipote

    Layout -> Main
    in Layout ho titoloMain = "il mio titolo" -> attributo titolo nel Main

*/