import { handleRadioInput } from "./helperFunctions";
import { useState } from "react";

function RadioButton({value, stateVar, setFunction}) {
    
    return (
        <label htmlFor={value}>{value}
        <input
        type="radio"
        id={value}
        name="transactionType"
        value={value}
        onChange={(event) => setFunction(event.target.value)}
         />
    </label>
    );
}

export default RadioButton;