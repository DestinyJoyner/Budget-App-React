import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import { convertObjValues } from "../ReusableComponents/helperFunctions";
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

    function handleSubmit(e) {
        e.preventDefault()
        convertObjValues(newTransaction, type)

        axios.post(`${API}`, newTransaction)
        .then(() => navigate("/transactions"))
        .catch(err => navigate("/*"))
    }

    return (
        <div className='new'>
            <form 
            className="form"
            onSubmit={(event) => handleSubmit(event)}>
                <Form
                stateVar={newTransaction}
                setFunction={setNewTransaction}
                type={type}
                setType={setType}
                formName={`New`}  
                />
            </form>
        </div>
    );
}

export default BudgetNew;