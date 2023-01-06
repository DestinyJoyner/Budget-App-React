import React from 'react';
import { handleTextInput } from './helperFunctions';

function DateInput({value, stateVar, setFunction}) {
    // -> originally this format "2023-01-10"
    
    return (
        <label htmlFor={value}>{value}
        <input
        type="date"
        id={value}
        value={stateVar[value]}
        onChange={(event) => handleTextInput(event, stateVar, setFunction)}
         />
    </label>
    );
}

export default DateInput;