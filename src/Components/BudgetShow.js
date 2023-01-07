import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import { convertDate } from "../ReusableComponents/helperFunctions";
import income from "../assets/income.png"
import expense from "../assets/expense.png"
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
                    <img src={thisTransaction.amount > 0 ? income : expense} alt = "income-expense"/>
                    <div className="date">
                        <p>Date: <span>{convertDate(thisTransaction.date)}</span></p>
                    </div>
                    
                    <div className="name-amount">
                    <p>For:<span>{thisTransaction.itemName}</span></p>
                    <p>Amount: $<span>{Math.abs(thisTransaction.amount)}</span></p>
                    <p>From: <span>{thisTransaction.from}</span></p>
                    <p>Memo: <span>{thisTransaction.category}</span></p>
                    </div>
                    <p className="receipt-id">{thisTransaction.id}</p>
                    
                </div>
            }
        </div>
    );
}

export default BudgetShow;