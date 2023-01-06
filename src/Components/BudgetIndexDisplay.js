import { Link } from "react-router-dom";
import { convertDate } from "../ReusableComponents/helperFunctions";

function BudgetIndexDisplay({date, itemName, amount, id}) {
    return ( 
        <div className="transaction">
            <p>{convertDate(date)}</p>
            <Link to={`/transactions/${id}`}><p>{itemName}</p></Link>
            <p>${amount}</p>
        </div>
    );
}

export default BudgetIndexDisplay;