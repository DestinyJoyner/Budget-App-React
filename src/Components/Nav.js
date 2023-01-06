import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
import dollarSign from '../assets/dollarSign-lessGold.gif'
import './Nav.css'


function Nav() {
    const {originalTotal} = useContext(ContextData)
    return (
        <nav className="nav">
            <Link to = "/">Home</Link>
            <Link to = "/transactions">Transactions</Link>
            <Link to = "/transactions/new">New Transaction</Link>
            <span>
                Starting Budget: $
                {originalTotal}</span>
        </nav>
    );
}

export default Nav;