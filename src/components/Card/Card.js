import "./style.css"
import imgcaffe from "./caffe.jpeg"

function Card(){
    return(
        <div className="card">
            <div className="card-body">
                <img src={imgcaffe} alt="caffe" />
                <img src="./assets/caffepublic.jpeg" alt="caffe" />
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