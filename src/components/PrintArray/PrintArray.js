function PrintArray(){
    let array = [1, 2, 3, 4]
    let arrayStringhe = ["prova1", "prova2"]
    
    return(
        <div>
            <h2>Stampa Array</h2>
            <h3>Stampa Array Numerico</h3>
            {array}
            <h3>Stampa Array Stringhe</h3>
            {arrayStringhe}
            <h3>Stampa Array con Map</h3>
            {array.map((valore, index) => (
                <p key={index}>{valore}</p>
            ))}
        </div>
    )
}

export default PrintArray