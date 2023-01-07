import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import './BudgetIndex.css'
import BudgetIndexDisplay from "./BudgetIndexDisplay";


function BudgetIndex() {
    const {axios, API, originalTotal, setOriginalTotal, data, setData} = useContext(ContextData)
    const navigate = useNavigate()
    const [currentTotal, setCurrentTotal] = useState(originalTotal)
    const [transactionTotal, setTransactionTotal] = useState(0)
    
   function updateTotal(initValue, arr, setFunction, setFunction2) {
    let sum = 0
    arr.forEach(({id, amount}) => {
        if(id) sum += amount
    })
    
    setFunction(sum)
    setFunction2(initValue + sum)
   }

    useEffect(() => {
       axios.get(`${API}`)
       .then(respJson => {
        setData(respJson.data)
        updateTotal(originalTotal, respJson.data, setTransactionTotal, setCurrentTotal)
       })
       .catch(err => navigate("/*"))
    }, [])

    return (
        <div className="index">
            <h1>Current Balance: ${currentTotal.toFixed(2)}</h1>
            <section className="listedTransactions">
                <div className="transactionTitles">
                    <p>{""}</p>
                    <p>Date</p>
                    <p>Item</p>
                    <p>Amount</p>
                </div>
                {
                    data.length > 0 && 
                    data.map(({id, date, itemName, amount}) => {
                        if(id){
                            return <BudgetIndexDisplay
                            key = {id}
                            date={date}
                            itemName={itemName}
                            amount={amount}
                            id={id} />
                        }
                    })
                }
            </section>
        </div>
    );
}

export default BudgetIndex;