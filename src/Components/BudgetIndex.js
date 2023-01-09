import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import BudgetIndexDisplay from "./BudgetIndexDisplay";
import barcode from"../assets/barcode.png"
import './BudgetIndex.css'



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
       .catch(err => navigate("/*")
    )
    }, [])

    return (
        <div className="index">
            <section className="listedTransactions">
                <h1>Current Balance: ${currentTotal.toFixed(2)}</h1>
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
                <img src={barcode} alt="barcode" className="barcode" />
            </section>
        </div>
    );
}

export default BudgetIndex;