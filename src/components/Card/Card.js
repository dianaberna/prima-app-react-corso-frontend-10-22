import "./style.css"

function Card(){
    return(
        <div className="card">
            <div className="card-body">
                {/* <img src="caffe.jpg" alt="caffe"> */}
                <div>
                    <h1>Vanilla Latte</h1>
                    <p>21K</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="etichette">
                    <span>Hot</span>
                    <span>Cold</span>
                </div>
                <button>Aggiungi</button>
            </div>
        </div>
    )
}

export default Card;