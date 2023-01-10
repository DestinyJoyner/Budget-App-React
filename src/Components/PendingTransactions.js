import { useContext, useEffect, useState } from "react";
import { ContextData } from "./Provider";
import "./PendingTransactions.css"

// ( Merge Sort, Selection Sort, Bubble Sort, Insertion Sort, Quicksort)

function PendingTransactions({currentTotal}) {
    const {pending, setPending} = useContext(ContextData)
    const [pendingTotal, setPendingTotal] = useState("")

    useEffect(() => {
        const pendingSum = pending.reduce((acc, {amount}) => {
            acc += amount
            return acc
        }, 0)
        setPendingTotal(pendingSum)
    }, [])

    return (
        <aside className="pending">
            <section>
                <h5>Current Balance: ${currentTotal.toFixed(2)}</h5>
            </section>
            <section>
                <h5>PendingTransactions:</h5>
                <span>{pendingTotal}</span>
            </section>
            <section>
                <h5>Recent Transaction:</h5>
            </section>
            <section>
                <h5>Upcoming Transaction:</h5>
            </section>
            
        </aside>
    );
}

export default PendingTransactions;