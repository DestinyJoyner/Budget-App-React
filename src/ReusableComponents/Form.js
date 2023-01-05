
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import DateInput from "./DateInput";
import RadioButton from "./RadioButton";


function Form({stateVar, setFunction, type, setType}) {
    

    return (
        <form className="form">
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



        </form>
    );
}

export default Form;