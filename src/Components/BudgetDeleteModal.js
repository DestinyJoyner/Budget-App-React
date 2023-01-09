import { useContext } from "react";
import { ContextData } from "./Provider";
import { useNavigate } from "react-router-dom";
import check from "../assets/checkmark.png"
import close from "../assets/close-x.png"
import "./BudgetDeleteModal.css"

function BudgetDeleteModal(props) {
    const {axios, API, deleteId, setDeleteModal} = useContext(ContextData)
    const navigate = useNavigate()

    function goBack() {
        setDeleteModal(false)
    }

    function deleteTransaction() {
        console.log(deleteId, API)
        setDeleteModal(false)
        navigate(`/transactions`)
        // axios.delete(`${API}/${deleteId}`)
        // .then((respJson) => {
        //     console.log(respJson.data)
        //     setDeleteModal(false)
        //     navigate(`/transactions`)
        // })
        // .catch(err => console.log(err))
    }

    return (
        <>
        <div className="overlay" />
        <div className="deleteModal">
        <h3>Are You Sure You Want To Permanently Delete This Transaction?</h3>
            <span>
                <button
                style={{backgroundColor: "green"}} 
                onClick={() => deleteTransaction()}>
                    <img src={check} alt="checkmark"/>
                </button>
                <button
                style={{backgroundColor: "red"}} 
                onClick={() => goBack()}>
                        <img src={close} alt="close" />
                </button>
            </span> 

        </div>
        </>

        
    );
}

export default BudgetDeleteModal;