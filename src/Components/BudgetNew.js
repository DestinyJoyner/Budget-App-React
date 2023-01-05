import { useState } from "react";
import Form from "../ReusableComponents/Form";

function BudgetNew(props) {
    const [newTransaction, setNewTransaction] = useState({
        itemName : "",
        amount: "",
        date: "",
        from: "",
        category: "",
    })

    return (
        <div className='new'>
            <h1>Add A New Transaction</h1>
            <Form
            stateVar={newTransaction}
            setFunction={setNewTransaction} />
        </div>
    );
}

export default BudgetNew;