import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
import './Nav.css'

function Nav() {
    const {total} = useContext(ContextData)
    return (
        <nav className="nav">
            <Link to = "/">Home</Link>
            <Link to = "/transactions">Transactions</Link>
            <Link to = "/transactions/new">New Transaction</Link>
            <span>Total: ${total}</span>
        </nav>
    );
}

export default Nav;