import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ContextData } from "./Provider";
import BackButton from "../ReusableComponents/BackButton";
import { convertDate } from "../ReusableComponents/helperFunctions";
import { toWords } from "number-to-words";
import expense from "../assets/decrease-arrow.png"
import income from "../assets/increase-arrow.png"
import pursuitLogo from "../assets/pursuit-logo.png"
import edit from "../assets/edit-icon.png"
import remove from "../assets/delete-icon.png"
import "./BudgetShow.css"

function BudgetShow() {
    const{API, axios, setDeleteId, setDeleteModal} = useContext(ContextData)
    const {id} = useParams()
    const navigate = useNavigate()
    const [thisTransaction, setThisTransaction] = useState({})

    function promptDelete() {
        setDeleteId(id)
        setDeleteModal(true)
    }

    useEffect(() => {
        axios.get(`${API}/${id}`)
        .then(respJson => setThisTransaction(respJson.data))
        .catch(err => navigate("/*"))
    },[])

    return (
        <div className='show'>
            <section className="show-header">
                <div className="circles">
                    <Link to={`/transactions/`} className="show-back">
                       <BackButton color={`#1b43af`} />
                    </Link>
                    <Link to={`/transactions/`}>
                       <BackButton color={`#236a73`} />
                    </Link>
                    <hr></hr>
                    <Link to={`/transactions/${id}/edit`}>
                        <div className="circle1">
                            <img src={edit} alt="edit" />
                        </div>
                    </Link>
                    <hr></hr>
                    <button 
                    className="circle1"
                    onClick={() => {promptDelete()}}>
                        <img src={remove} alt="remove" className="remove" />
                    </button>
                </div>
            </section>   
            {
                Object.keys(thisTransaction).length &&
                <div className="transacDetails">
                    <h1 className="hidden-show">Guest Check</h1>
                    <div className ="pursuit-info">
                        <img src={pursuitLogo} alt="pursuit-log"/>
                        <p>47-10 Austell Pl <br></br>2nd floor, <br></br>Long Island City, NY 11101</p>
                    </div>

                    <img 
                    src={thisTransaction.amount > 0 ? income : expense} 
                    alt = "income-expense"/>

                    <p className="date">Date: 
                        <span>
                            {convertDate(thisTransaction.date)}
                        </span>
                    </p>
                    
                    <p className="for">For:
                        <span>{thisTransaction.itemName}
                        </span>
                    </p>
                    
                    <p className="amount">$
                        <span>
                            {Math.abs(thisTransaction.amount).toFixed(2)}</span>
                    </p>
                   
                    <div className="transac-data">
                    <p>In the <br></br> Amount of:
                        <span>
                            {toWords(Math.abs(thisTransaction.amount))}
                        </span> Dollars
                    </p>
                    <p className="from">From: 
                        <span>
                            {thisTransaction.from}
                        </span>
                    </p>
                    <p className="memo">Memo: 
                        <span>
                            {thisTransaction.category}
                        </span>
                    </p>
                    </div>
                    <p className="place-holder"></p>
                    
                    <p className="receipt-id">
                        {thisTransaction.id}
                    </p>   
                </div>
            }
        </div>
    );
}

export default BudgetShow;