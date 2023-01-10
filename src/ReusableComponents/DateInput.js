import { handleTextInput, convertInput } from './helperFunctions';

function DateInput({value, stateVar, setFunction}) {
    return (
        <label htmlFor={value}>{convertInput(value)}: {" "}
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