import React from 'react';

function BudgetIndexDisplay({date, itemName, amount}) {
    return ( 
        <div className="transaction">
            <p>{date}</p>
            <p>{itemName}</p>
            <p>${amount}</p>
        </div>
    );
}

export default BudgetIndexDisplay;