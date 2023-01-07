import { handleTextInput, convertInput } from "./helperFunctions";

function TextInput({value, stateVar, setFunction}) {
    const labelTitle = value === "itemName" ? "transaction Name" : value
    return (
        <label htmlFor={value}>{convertInput(labelTitle)}: {" "}
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