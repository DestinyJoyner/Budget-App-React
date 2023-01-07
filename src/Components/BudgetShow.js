import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import { convertDate } from "../ReusableComponents/helperFunctions";
import { toWords } from "number-to-words";
import expense from "../assets/decrease-arrow.png"
import income from "../assets/increase-arrow.png"
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
            <h1>Transaction</h1>
            {
                Object.keys(thisTransaction).length &&
                <div className="transacDetails">
                    <h3>Receipt</h3>

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
                            {Math.abs(thisTransaction.amount)}</span>
                    </p>
                   
                    <div className="transac-data">
                    <p>In the Amount of:
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