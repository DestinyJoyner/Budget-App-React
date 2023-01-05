import { useState } from "react";
import Form from "../ReusableComponents/Form";
import './BudgetNew.css'

function BudgetNew(props) {
    const [newTransaction, setNewTransaction] = useState({
        itemName : "",
        amount: "",
        date: "",
        from: "",
        category: "",
    })

    const [type, setType] = useState("") 

    return (
        <div className='new'>
            <h1>Add A New Transaction</h1>
            <Form
            stateVar={newTransaction}
            setFunction={setNewTransaction}
            type={type}
            setType={setType} />
        </div>
    );
}

export default BudgetNew;