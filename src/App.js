import {useEffect, useState} from "react"
import axios from 'axios';
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
      <h1>Pursuit App Deployed</h1>
      {data.length > 0 && Object.keys(data[0])}
      
    </div>
  );
}

export default App;
