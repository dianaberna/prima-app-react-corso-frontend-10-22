import Card from '../Card/Card'

function Main(props){
    /* console.log(props.tema) */
    console.log(props.titolo)
    return(
        <main>
            <h2>{props.titolo}</h2>
            {/* qui ci sarà la nostra card */}
            <Card tema={props.tema}/>
        </main>
    )
}

export default Main;