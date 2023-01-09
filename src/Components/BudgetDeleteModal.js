import { useContext } from "react";
import { ContextData } from "./Provider";
import { useNavigate } from "react-router-dom";
import check from "../assets/checkmark.png"
import close from "../assets/close-x.png"
import "./BudgetDeleteModal.css"
import axios from "axios";

function BudgetDeleteModal(props) {
    const { API, deleteId, setDeleteModal, setDeleteId} = useContext(ContextData)
    const navigate = useNavigate()

    function goBack() {
        setDeleteModal(false)
    }

    function deleteTransaction() {
        console.log(`clicked check`)
        // axios.delete(`http://localhost:4562/transactions/${deleteId}`, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     }
        //   })
        // .then(() => {
        //     setDeleteId("")
        //     setDeleteModal(false)
        //     navigate(`/transactions`)
        // })
        // .catch(err => {
        //     console.log(err)
        //     console.log(`delete req err`)
        // })
        
        axios.delete(`${API}/${deleteId}`, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
        .then((respJson) => {
            console.log(respJson.data)
            setDeleteId("")
            setDeleteModal(false)
            navigate(`/transactions`)
        })
        .catch(err => {
            console.log(err)
            console.log(`delete req err`)
        })
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