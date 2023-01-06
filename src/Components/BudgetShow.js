import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import { convertDate } from "../ReusableComponents/helperFunctions";
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
                <>
                    <p>{convertDate(thisTransaction.date)}</p>
                    <p>{thisTransaction.itemName}</p>
                    <p>{Math.abs(thisTransaction.amount)}</p>
                    <p>{thisTransaction.from}</p>
                    <p>{thisTransaction.category}</p>
                </>
            }
        </div>
    );
}

export default BudgetShow;