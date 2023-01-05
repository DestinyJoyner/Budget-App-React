import { handleNumberInput } from "./helperFunctions";

function NumberInput({value, stateVar, setFunction}) {
    return (
        <label htmlFor={value}>{value}
        <input
        type="number"
        id={value}
        value={stateVar[value]}
        onChange={(event) => handleNumberInput(event, stateVar, setFunction)}
         />
    </label>
    );
}

export default NumberInput;