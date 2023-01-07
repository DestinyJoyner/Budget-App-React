import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
import bank from "../assets/bank-icon.png"
import dollarSign from "../assets/dollar-sign.png"
import './Nav.css'


function Nav() {
    const {originalTotal} = useContext(ContextData)
    return (
        <nav className="nav">
            <img src={bank} alt="bank" />
            <Link to = "/">Home</Link>
            <Link to = "/transactions">Transactions</Link>
            <Link to = "/transactions/new">New Transaction</Link>
            <div>
                <span className="navSpan">Starting Budget:</span>
                <img src={dollarSign} alt="dollarSign"/>
                <span className="navTotal">${originalTotal}</span>
                
            </div>
        </nav>
    );
}

export default Nav;