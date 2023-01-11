import { Link } from "react-router-dom";
import creditCard from "../assets/transparent-credit-card.png"
import "./ErrorPage.css"

function ErrorPage() {
    return (
        <div className='error'>
            <img src={creditCard} alt="credit-card"/>
            <div className="error-text">
            <h1>Uh-Oh <br></br>Looks Like Something<br></br> Went Wrong </h1>
            <Link to="/">
                <button>
                    Back To Home
                </button>
           </Link>
            </div>
            
           
        </div>
    );
}

export default ErrorPage;