import { convertInput } from "./helperFunctions";

function RadioButton({value, stateVar, setFunction}) {
    
    return (
        <label htmlFor={value}>
        <input
        type="radio"
        id={value}
        name="transactionType"
        checked={stateVar === value ? true : false}
        value={value}
        onChange={(event) => setFunction(event.target.value)}
         />
        {convertInput(value)}: {" "}
    </label>
    );
}

export default RadioButton;