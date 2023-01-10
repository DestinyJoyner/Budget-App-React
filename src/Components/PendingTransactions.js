import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
import { convertDate, dateObjCompare } from "../ReusableComponents/helperFunctions";
import "./PendingTransactions.css"

// ( Merge Sort, Selection Sort, Bubble Sort, Insertion Sort, Quicksort)

function PendingTransactions({currentTotal}) {
    const {pending, setPending, data, originalTotal, pendingTotal, setPendingTotal} = useContext(ContextData)
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
    }, [pending.length])

    return (
        <aside className="pendingAside">
            <section>
                <h5>Starting Balance:</h5>
                <span>${originalTotal.toFixed(2)}</span>
            </section>
            <section>
                <h5 className="otherH5">Pending Transactions:</h5>
                <span
                style={{color: pendingTotal < 0 ? "#8b0000" : "#00B000"}}>{pendingTotal < 0 ? "- " : ''}${Math.abs(pendingTotal)}</span>
                <br></br>
                <Link to="/transactions/pending">Go To Pending Transactions</Link>
            </section>
            <section>
                <h5 className="otherH5">Recent Transaction:</h5>
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
                <h5 className="otherH5">Upcoming Transaction:</h5>
                <span>
                {
                    pendingTransac ?
                    <>
                    <p>{convertDate(pendingTransac.date)}</p>
                    <p>{pendingTransac.itemName}</p>
                    </> : "none"  
                    
                }
                </span>
            </section>
            
        </aside>
    );
}

export default PendingTransactions;