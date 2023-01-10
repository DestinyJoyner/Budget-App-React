import { useContext } from "react";
import { ContextData } from "./Provider";
import { handleTextInput } from "../ReusableComponents/helperFunctions";
import './HomeModal.css'

function HomeModal() {
    const {originalTotal, setOriginalTotal, homeModal, setHomeModal, setCurrentTotal} = useContext(ContextData)

    function handleButton(){
        if(originalTotal){
            setHomeModal(false)
            setOriginalTotal(originalTotal)
            setCurrentTotal(originalTotal)
        } 
    }
    
    return (
        homeModal &&
        <>
        <div className="overlay" />
        <div className="homeModal">
            <h2>Please Enter Your Budget Amount:</h2>

            <label htmlFor="initialTotal">$:{"  "}
                <input
                id = "initialTotal"
                type="number"
                value={originalTotal}
                onChange={(event) => handleTextInput(event, originalTotal, setOriginalTotal)}
                required
                />
            </label>
        
            <button
            onClick = {() => handleButton()}
            >Let's Budget!
            </button>
        </div>
        </>
    );
}

export default HomeModal;