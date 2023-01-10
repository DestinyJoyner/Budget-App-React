import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
import bank from "../assets/bank-icon.png"
import dollarSign from "../assets/dollar-sign.png"
import './Nav.css'


function Nav() {
    const {currentTotal} = useContext(ContextData)
    const totalColor = currentTotal < 1000 ? "orange" : "green"

    return (
        <nav className="nav">
            <Link to = "/"><img src={bank} alt="bank" /></Link>
            <Link to = "/transactions">Transactions</Link>
            <Link to = "/transactions/pending">Pending Transactions</Link>
            <Link to = "/transactions/new">New Transaction</Link>
            <div>
                <span className="navSpan">Balance</span>
                <img src={dollarSign} alt="dollarSign"/>
                <span 
                className="navTotal"
                style={{backgroundColor: currentTotal < 0 ? "red" : totalColor }}>${currentTotal}</span>
                
            </div>
        </nav>
    );
}

export default Nav;