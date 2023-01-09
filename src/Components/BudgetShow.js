import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ContextData } from "./Provider";
import BackButton from "../ReusableComponents/BackButton";
import { convertDate } from "../ReusableComponents/helperFunctions";
import { toWords } from "number-to-words";
import expense from "../assets/decrease-arrow.png"
import income from "../assets/increase-arrow.png"
import pursuitLogo from "../assets/pursuit-logo.png"
import edit from "../assets/edit-icon.png"
import back from "../assets/return-arrow.png"
import remove from "../assets/delete-icon.png"
import "./BudgetShow.css"


function BudgetShow() {
    const{API, axios} = useContext(ContextData)
    const {id} = useParams()
    const navigate = useNavigate()
    const [thisTransaction, setThisTransaction] = useState({})

    useEffect(() => {
        axios.get(`${API}/${id}`)
        .then(respJson => setThisTransaction(respJson.data))
        .catch(err => navigate("/*"))
    })

    return (
        <div className='show'>
            <section className="show-header">
                <div className="circles">
                    <Link to={`/transactions/`}>
                       <BackButton color={`#236a73`} />
                    </Link>
                    <hr></hr>
                    <Link to={`/transactions/${id}/edit`}>
                        <div className="circle1">
                            <img src={edit} alt="edit" />
                        </div>
                    </Link>
                    <hr></hr>
                    <button 
                    className="circle1">
                        <img src={remove} alt="remove" className="remove" />
                    </button>
                </div>

            </section>
            
            {
                Object.keys(thisTransaction).length &&
                <div className="transacDetails">
                    <div className ="pursuit-info">
                        <img src={pursuitLogo} alt="pursuit-log"/>
                        <p>47-10 Austell Pl <br></br>2nd floor, <br></br>Long Island City, NY 11101</p>
                    </div>

                    <img 
                    src={thisTransaction.amount > 0 ? income : expense} 
                    alt = "income-expense"/>

                    <p className="date">Date: 
                        <span>
                            {convertDate(thisTransaction.date)}
                        </span>
                    </p>
                    
                    <p className="for">For:
                        <span>{thisTransaction.itemName}
                        </span>
                    </p>
                    
                    <p className="amount">$
                        <span>
                            {Math.abs(thisTransaction.amount).toFixed(2)}</span>
                    </p>
                   
                    <div className="transac-data">
                    <p>In the <br></br> Amount of:
                        <span>
                            {toWords(Math.abs(thisTransaction.amount))}
                        </span> Dollars
                    </p>
                    <p>From: 
                        <span>
                            {thisTransaction.from}
                            </span>
                    </p>
                    <p>Memo: 
                        <span>
                            {thisTransaction.category}
                            </span>
                    </p>
                    </div>

                    <p className="receipt-id">
                        {thisTransaction.id}
                    </p>
                    
                </div>
            }
        </div>
    );
}

export default BudgetShow;