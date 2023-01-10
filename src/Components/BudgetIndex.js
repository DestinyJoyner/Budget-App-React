import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import BudgetIndexDisplay from "./BudgetIndexDisplay";
import PendingTransactions from "./PendingTransactions";
import { convertDate, dateObjCompare, updateTotal } from "../ReusableComponents/helperFunctions";
import barcode from"../assets/barcode.png"
import './BudgetIndex.css'


function BudgetIndex() {
    const {axios, API, originalTotal, setOriginalTotal, data, setData, setHomeModal, setPending} = useContext(ContextData)
    const navigate = useNavigate()
    const [currentTotal, setCurrentTotal] = useState(originalTotal)
    const [transactionTotal, setTransactionTotal] = useState(0)

    useEffect(() => {
       axios.get(`${API}`)
       .then(respJson => {
        const [pendingArr, transacArr] = respJson.data.reduce((acc, obj) => {
            const whichArr = dateObjCompare(obj.date) ? 0 : 1
            acc[whichArr].push(obj)
            return acc
        }, [[],[]])

        setPending(pendingArr)
        setData(transacArr)
        updateTotal(originalTotal, transacArr, setTransactionTotal, setCurrentTotal)
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
                            if(!dateObjCompare(date)){
                                return <BudgetIndexDisplay
                                key = {id}
                                date={convertDate(date)}
                                itemName={itemName}
                                amount={amount}
                                id={id} />
                            }   
                        }
                    })   
                }
                
                <img src={barcode} alt="barcode" className="barcode" />
            </section>
            <PendingTransactions
            currentTotal={currentTotal} />
        </div>
    );
}

export default BudgetIndex;