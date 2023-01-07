import { Link } from "react-router-dom";
import { convertDate } from "../ReusableComponents/helperFunctions";
import payment from "../assets/payment-icon.png"

function BudgetIndexDisplay({date, itemName, amount, id}) {
    return ( 
        <div className="transaction">
            <img src={payment} alt="wallet-icon" />
            <p>{convertDate(date)}</p>
            <Link to={`/transactions/${id}`}><p>{itemName}</p></Link>
            <p
            style={{color: amount < 0 ? "red" : "green"}}>{amount < 0 ? "- " : ''}${Math.abs(amount).toFixed(2)}</p>
        </div>
    );
}

export default BudgetIndexDisplay;