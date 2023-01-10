import { useContext, useEffect, useState } from "react";
import { ContextData } from "./Provider";
import { convertDate, dateObjCompare } from "../ReusableComponents/helperFunctions";
import "./PendingTransactions.css"

// ( Merge Sort, Selection Sort, Bubble Sort, Insertion Sort, Quicksort)

function PendingTransactions({currentTotal}) {
    const {pending, setPending, data} = useContext(ContextData)
    const [pendingTotal, setPendingTotal] = useState("")
    const [recentTransac, setRecentTransac] = useState("")
    const [pendingTransac, setPendingTransac] = useState("")

    function sortTransacDate(arr) {
        const sortArr = arr.filter(({date, id})=> {
            if(id) return !dateObjCompare(date)
        })
        
        sortArr.sort((a, b) => 
        new Date(convertDate(a.date)) < new Date(convertDate(b.date)) ? -1 : 1 || 0
        )

        return sortArr.reverse()[0]
    }

    function sortPending(arr) {
        arr.sort((a, b) => 
        new Date(convertDate(a.date)) < new Date(convertDate(b.date)) ? -1 : 1 || 0
        )
        return arr[0]
    }

    useEffect(() => {
        const pendingSum = pending.reduce((acc, {amount}) => {
            acc += amount
            return acc
        }, 0)
        
        setPendingTotal(pendingSum)
        setRecentTransac(sortTransacDate(data))
        setPendingTransac(sortPending(pending))
    }, [data.length])

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
                <span>
                    {recentTransac ? 
                    <> 
                    <p>{convertDate(recentTransac.date)}</p>
                    <p>{recentTransac.itemName}</p>
                    </> : "none"   
                    }
                </span>
            </section>
            <section>
                <h5>Upcoming Transaction:</h5>
                {
                    pendingTransac ?
                    <>
                    <p>{convertDate(pendingTransac.date)}</p>
                    <p>{pendingTransac.itemName}</p>
                    </> : "none"  
                    
                }
            </section>
            
        </aside>
    );
}

export default PendingTransactions;