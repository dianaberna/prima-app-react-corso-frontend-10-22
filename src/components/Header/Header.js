import Navbar from "../Navbar/Navbar";

function Header(){

    /* sono un commento */
    // sono un commento

    return (
        <header>
            {/* é il nostro camponente Navbar non una qualsiasi navbar */}
            <Navbar/> 
            <h2>sono l'header</h2>
        </header>
    )
}

export default Header;