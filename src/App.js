import "./App.css";

// function component / componente funzionale
function App() {
    let numero = 10;

    // ` ${}`
    return <div className="App">ciao {numero + 10}</div>;
}

export default App;

// funzione
function stampaCiao() {
    console.log("ciao");
}
