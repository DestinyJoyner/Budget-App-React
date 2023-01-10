import { useContext } from "react";
import { ContextData } from "./Provider";
import { handleTextInput } from "../ReusableComponents/helperFunctions";
import './HomeModal.css'

function HomeModal() {
    const {originalTotal, setOriginalTotal, homeModal, setHomeModal} = useContext(ContextData)

    function handleButton(){
        setHomeModal(false)
        setOriginalTotal(originalTotal)
    }
    
    return (
        homeModal &&
        <>
        <div className="overlay" />
        <div className="homeModal">
        <h2>Please Enter Your Budget Amount:</h2>

        <input
        id = "initialTotal"
        type="number"
        value={originalTotal}
        onChange={(event) => handleTextInput(event, originalTotal, setOriginalTotal)
        }
        required
        />
        <button
        onClick = {() => handleButton()}
        >Let's Budget!</button>
       </div>
       </>
    );
}

export default HomeModal;