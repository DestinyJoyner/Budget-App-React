import { useContext } from "react";
import { ContextData } from "./Provider";
import { useNavigate } from "react-router-dom";
import check from "../assets/checkmark.png"
import close from "../assets/close-x.png"
import "./BudgetDeleteModal.css"

function BudgetDeleteModal() {
    const { API, axios, deleteId, setDeleteModal} = useContext(ContextData)
    const navigate = useNavigate()

    function goBack() {
        setDeleteModal(false)
    }

    function deleteTransaction() {
        axios.delete(`${API}/${deleteId}`, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
        .then(() => {
            setDeleteModal(false)
            navigate(`/transactions`)
        })
        .catch(err => navigate("/*"))
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