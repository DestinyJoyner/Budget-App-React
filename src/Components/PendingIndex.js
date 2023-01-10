import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ContextData } from "../Components/Provider";
import BudgetIndexDisplay from "./BudgetIndexDisplay";
import { convertDate } from "../ReusableComponents/helperFunctions";
import "./PendingIndex.css"

function PendingIndex() {
    const {pending, setPending, pendingTotal, setPendingTotal} = useContext(ContextData)
    const {id} = useParams()

    useEffect(() => {
        pending.sort((a, b) => 
        new Date(convertDate(a.date)) < new Date(convertDate(b.date)) ? -1 : 1 || 0
        )
    }, [pending.length])

    return (
        <div className='pending'>
             <h1>Pending Transactions
                <br></br>
                <span>Pending Total: {pendingTotal}</span> 
             </h1>
             
            <section className="listPending">
            <div className="pending-titles">
                    <p>{""}</p>
                    <p>Date</p>
                    <p>Item</p>
                    <p>Amount</p>
                </div>
                {
                    pending.length > 0 &&
                    pending.map(({id, date, itemName, amount}) => 
                    <BudgetIndexDisplay
                                key = {id}
                                date={convertDate(date)}
                                itemName={itemName}
                                amount={amount}
                                type={`pending`}
                                id={id} />
                    )
                }

            </section>
        </div>
    );
}

export default PendingIndex;