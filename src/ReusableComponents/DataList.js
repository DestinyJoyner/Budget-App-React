import { handleTextInput, convertInput } from "./helperFunctions";

function DataList({value, stateVar, setFunction}) {

    return (
        <label htmlFor={value}>{convertInput(value)}: {" "}
        <input 
        list="dataList"
        id={value} 
        type="text"
        value={stateVar[value]}
        onChange={(event) => handleTextInput(event, stateVar, setFunction)} />

        <datalist id="dataList">
        <option value="Savings" />
        <option value="Food" />
        <option value="Pet" />
        <option value="Utility" />
        <option value="Tuition" />
        <option value="Transportation" />
        <option value="Other" />
        </datalist>
        </label>
    );
}

export default DataList;