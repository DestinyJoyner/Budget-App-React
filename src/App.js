import {useEffect, useState} from "react"
import axios from 'axios';
import RouteComponent from "./Components/RouteComponent";
import './App.css';

function App() {
  const API = process.env.REACT_APP_API_URL
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${API}`)
    .then(respJson => setData(respJson.data) )
    .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      <RouteComponent />
      
    </div>
  );
}

export default App;
