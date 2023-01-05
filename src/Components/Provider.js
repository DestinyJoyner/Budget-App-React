import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'
import Footer from './Footer'
export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    const [data, setData] = useState([])
    const [total, setTotal] = useState(5000)
    const [homeModal, setHomeModal] = useState(true)
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
        total,
        setTotal,
        homeModal,
        setHomeModal,
       }}>
        <Nav />
        <Footer />
        {children}
       </ContextData.Provider>
    );
}

export default Provider;