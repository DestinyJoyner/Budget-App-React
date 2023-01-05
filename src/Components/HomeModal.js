import { useContext } from "react";
import { ContextData } from "./Provider";
import { handleTextInput } from "../ReusableComponents/helperFunctions";
import './HomeModal.css'

function HomeModal() {
    const {total, setTotal, homeModal, setHomeModal} = useContext(ContextData)

    function handleButton(){
        setTotal(total)
        setHomeModal(false)
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
        value={total}
        onChange={(event) => handleTextInput(event, total, setTotal)}
        />
        <button
        onClick = {() => handleButton()}
        >Let's Budget!</button>
       </div>
       </>
    );
}

export default HomeModal;