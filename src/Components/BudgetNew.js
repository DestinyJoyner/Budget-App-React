import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import { convertDate } from "../ReusableComponents/helperFunctions";
import Form from "../ReusableComponents/Form";
import './BudgetNew.css'


function BudgetNew() {
    const {API, axios} = useContext(ContextData)
    const navigate = useNavigate()
    
    const [newTransaction, setNewTransaction] = useState({
        itemName : "",
        amount: "",
        date: "",
        from: "",
        category: "",
    })
    const [type, setType] = useState("")

    function convertObjValues(obj, stateVar) {
        if(stateVar === "expense") obj.amount = -Math.abs(obj.amount)

        obj.date = convertDate(obj.date)
    }

    function handleSubmit(e) {
        e.preventDefault()
        convertObjValues(newTransaction, type)

        axios.post(`${API}`, newTransaction)
        .then(() => navigate("/transactions"))
        .catch(err => navigate("/*"))
    }

    return (
        <div className='new'>
            <h1>Add A New Transaction</h1>
            <form 
            className="form"
            onSubmit={(event) => handleSubmit(event)}>
                <Form
                stateVar={newTransaction}
                setFunction={setNewTransaction}
                type={type}
                setType={setType} />
            </form>
        </div>
    );
}

export default BudgetNew;