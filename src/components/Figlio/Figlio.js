function Figlio({ nuovoValore, handleClick }){
    /* nuovoValore = nuovoValore + 1 --> non funziona */
    return(
        <div>
            <h2>Figlio</h2>
            <p>Numero figlio: {nuovoValore}</p>
            <button onClick={() => handleClick(nuovoValore+1)}>Cliccami</button>
        </div>
    )
}

export default Figlio