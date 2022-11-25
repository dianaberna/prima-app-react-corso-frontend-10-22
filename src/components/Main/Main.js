import CardList from '../CardList/CardList';

function Main(props){
   
    return(
        <main>
            <h2>{props.titolo}</h2>
            <CardList />
        </main>
    )
}

export default Main;
