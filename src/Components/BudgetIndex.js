import { useContext, useState, useEffect } from "react";
import { ContextData } from "./Provider";
import './BudgetIndex.css'
import BudgetIndexDisplay from "./BudgetIndexDisplay";

function BudgetIndex() {
    const {total, setTotal, data, setData} = useContext(ContextData)
    const [transactionTotal, setTransactionTotal] = useState(0)
    
    useEffect(() => {
        let sum = 0
        data.forEach(({id, amount}) => {
            if(id) sum += amount
        })
        setTransactionTotal(sum)
        setTotal(total - sum)
    }, [])


    return (
        <div className="index">
            <h1>Money In the Bank: ${total}</h1>
            <section className="listedTransactions">
                <div className="transactionTitles">
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
                            amount={amount} />
                        }
                    })
                }
            </section>
        </div>
    );
}

export default BudgetIndex;