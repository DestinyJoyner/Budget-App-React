
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";


function Form({stateVar, setFunction}) {
    

    return (
        <form className="form">
            <TextInput 
            value = {"itemName"}
            stateVar={stateVar}
            setFunction={setFunction}/>

            <NumberInput
            value = {"amount"}
            stateVar={stateVar}
            setFunction={setFunction} />
        </form>
    );
}

export default Form;