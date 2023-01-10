import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import BudgetIndexDisplay from "./BudgetIndexDisplay";
import PendingTransactions from "./PendingTransactions";
import { convertDate, dateObjCompare, updateTotal } from "../ReusableComponents/helperFunctions";
import barcode from"../assets/barcode.png"
import './BudgetIndex.css'


function BudgetIndex() {
    const {axios, API, originalTotal, setData, setHomeModal, setPending, currentTotal, setCurrentTotal} = useContext(ContextData)
    const navigate = useNavigate()
    // const [currentTotal, setCurrentTotal] = useState(originalTotal)
    const [transactionTotal, setTransactionTotal] = useState(0)
    const [processedTransacs, setProcessedTransacs] = useState([])
    const totalColor = currentTotal < 1000 ? "orange" : "green"

    useEffect(() => {
        if(!currentTotal){
            setHomeModal(true)
            navigate("/")
        }
        else{
            axios.get(`${API}`)
       .then(respJson => {
        setData(respJson.data)
        const [pendingArr, transacArr] = respJson.data.reduce((acc, obj) => {
            const whichArr = dateObjCompare(obj.date) ? 0 : 1
            acc[whichArr].push(obj)
            return acc
        }, [[],[]])

        setPending(pendingArr)
        setProcessedTransacs(transacArr)
        updateTotal(originalTotal, transacArr, setTransactionTotal, setCurrentTotal)
       })
       .catch(err => navigate("/*")
    )
            
        }
       
    }, [])

    return (
        currentTotal &&
        <div className="index">
            <section className="listedTransactions">
                <h1>Current Balance: ${" "}
                    <span
                    style={{color: currentTotal < 0 ? "red" : totalColor }}>{currentTotal.toFixed(2)}</span>
                </h1>
                <div className="transactionTitles">
                    <p>{""}</p>
                    <p>Date</p>
                    <p>Item</p>
                    <p>Amount</p>
                </div>
                {
                    processedTransacs.length > 0 && 
                    processedTransacs.map(({id, date, itemName, amount}) => {
                        if(id){
                            if(!dateObjCompare(date)){
                                return <BudgetIndexDisplay
                                key = {id}
                                date={convertDate(date)}
                                itemName={itemName}
                                amount={amount}
                                type={`transaction`}
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