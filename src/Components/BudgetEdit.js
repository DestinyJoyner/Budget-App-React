import { useState, useContext, useEffect } from "react";
import { ContextData } from "./Provider";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../ReusableComponents/Form";
import { convertObjValues } from "../ReusableComponents/helperFunctions";


function BudgetEdit() {
    const {API, axios,} = useContext(ContextData)
    const navigate = useNavigate()
    const {id} = useParams()
    const [type, setType] = useState("")
    const [editTransaction, setEditTransaction] = useState({})

    function handleSubmit(e) {
    e.preventDefault()
    convertObjValues(editTransaction, type)

    axios.put(`${API}/${id}`, editTransaction)
    .then(() => navigate(`/transactions/${id}`))
    .catch(err => navigate("/*"))
    }

    useEffect(() => {
        axios.get(`${API}/${id}`)
        .then(respJson => {
            setEditTransaction(respJson.data)
            if(respJson.data.amount < 0){
                setType("expense")
                setEditTransaction({...respJson.data, amount: Math.abs(respJson.data.amount)})
            }
            else {
                setType("income")
            }
        })
        .catch(err => navigate("/*"))
    },[id])

    return (
        <div className="edit">
            <h1>Edit Previous Transaction</h1>
            <form 
            className="form"
            onSubmit={(event) => handleSubmit(event)}>
           {
            editTransaction.itemName && 
            <Form
            stateVar={editTransaction}
            setFunction={setEditTransaction}
            type={type}
            setType={setType} 
            />
           }
            </form>
            
        </div>
    );
}

export default BudgetEdit;