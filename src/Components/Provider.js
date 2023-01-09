import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'
import Footer from './Footer'
import BudgetDeleteModal from "./BudgetDeleteModal";
export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    const [data, setData] = useState([])
    const [originalTotal, setOriginalTotal] = useState(5000)
    const [homeModal, setHomeModal] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    const [deleteModal, setDeleteModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}`)
        .then(respJson => setData(respJson.data) )
        .catch(err => navigate("/*"))
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