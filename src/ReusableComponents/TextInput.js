import { handleTextInput } from "./helperFunctions";

function TextInput({value, stateVar, setFunction}) {
    const labelTitle = value === "itemName" ? "transaction name" : value
    return (
        <label htmlFor={value}>{labelTitle}
            <input
            type="text"
            id={value}
            value={stateVar[value]}
            onChange={(event) => handleTextInput(event, stateVar, setFunction)}
             />
        </label>
    );
}

export default TextInput;