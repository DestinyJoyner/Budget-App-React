import { createContext, useState, useEffect} from "react";
import axios from "axios";
import Nav from './Nav'
import Footer from './Footer'
import BudgetDeleteModal from "./BudgetDeleteModal";
export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    const [data, setData] = useState([])
    const [originalTotal, setOriginalTotal] = useState("")
    const [currentTotal, setCurrentTotal] = useState(originalTotal)
    const [homeModal, setHomeModal] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    const [deleteModal, setDeleteModal] = useState(false)
    // Bonus
    const [pending, setPending] = useState([])
    const [pendingTotal, setPendingTotal] = useState("")

    useEffect(() => {
        if(originalTotal === undefined) setHomeModal(true)
    },[])

    return (
       <ContextData.Provider value = {{
        axios,
        API,
        data,
        setData,
        originalTotal,
        setOriginalTotal,
        homeModal,
        setHomeModal,
        deleteId,
        setDeleteId,
        deleteModal,
        setDeleteModal,
        pending, 
        setPending,
        pendingTotal,
        setPendingTotal,
        currentTotal,
        setCurrentTotal
       }}>
        <Nav />
        <Footer />
        {deleteModal && <BudgetDeleteModal />}
        {children}
       </ContextData.Provider>
    );
}

export default Provider;