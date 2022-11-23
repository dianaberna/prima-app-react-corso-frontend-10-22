import Card from '../Card/Card'

function Main(props){
    /* console.log(props.tema) */
    console.log(props.titolo)
    return(
        <main>
            <h2>{props.titolo}</h2>
            {/* qui ci sarà la nostra card */}
            <Card colore={props.tema}/>
            <Card colore="dark"/>
        </main>
    )
}

export default Main;

// al Main non interessa il tema, lo andiamo a propagare al suo figlio, cioè Card