import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import DateInput from "./DateInput";
import RadioButton from "./RadioButton";
import DataList from "./DataList";
import "./Form.css"

function Form({stateVar, setFunction, type, setType, formName}) {
   
    return (
        <>
        <h1>{formName} Form</h1>
            <TextInput 
            value = {"itemName"}
            stateVar={stateVar}
            setFunction={setFunction}/>

            <NumberInput
            value = {"amount"}
            stateVar={stateVar}
            setFunction={setFunction}/>

            <DateInput
            value = {"date"}
            stateVar={stateVar}
            setFunction={setFunction} 
            />

            <TextInput
            value = {"from"}
            stateVar={stateVar}
            setFunction={setFunction} 
            />

            <section className="radioButtons">
                <RadioButton 
                value = {"income"}
                stateVar={type}
                setFunction={setType}
                />
                <RadioButton 
                value = {"expense"}
                stateVar={type}
                setFunction={setType}
                />
            </section>

            <DataList 
            value = {"category"}
            stateVar={stateVar}
            setFunction={setFunction}
            />

            <input
            className="submitButton"
            type="submit" />

            
        </>
    );
}

export default Form;