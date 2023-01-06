import { Link } from "react-router-dom";

function BudgetIndexDisplay({date, itemName, amount, id}) {
    return ( 
        <div className="transaction">
            <p>{date}</p>
            <Link to={`/transactions/${id}`}><p>{itemName}</p></Link>
            <p>${amount}</p>
        </div>
    );
}

export default BudgetIndexDisplay;