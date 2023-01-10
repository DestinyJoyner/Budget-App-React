import { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'
import Footer from './Footer'
import BudgetDeleteModal from "./BudgetDeleteModal";
import HomeModal from "./HomeModal";
export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    const [data, setData] = useState([])
    const [originalTotal, setOriginalTotal] = useState("")
    const [homeModal, setHomeModal] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    const [deleteModal, setDeleteModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(!originalTotal) setHomeModal(true)
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
       }}>
        <Nav />
        <Footer />
        {deleteModal && <BudgetDeleteModal />}
        {children}
       </ContextData.Provider>
    );
}

export default Provider;