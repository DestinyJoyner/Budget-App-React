import { useContext , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import HomeModal from "./HomeModal";
import altHomeImg from "../assets/cash-fan.png"
import homeImg from "../assets/budget-home.png"
import dollarSign from "../assets/spin-dollar(2).gif"
import receipt from "../assets/receipt-gif.gif"
import linkedIn from "../assets/linkedIn-icon.png"
import gitHub from "../assets/gitHub-icon.png"
import "./HomePage.css"

function HomePage() {
    const {setHomeModal, originalTotal} = useContext(ContextData)
    const navigate = useNavigate()

    useEffect(() => {
        if(!originalTotal) setHomeModal(true)
    },[])

    return (
        <div className='home'>
            <HomeModal />
            <h1>Budget App</h1>
            <button 
            className="circle1"
            onClick={() => setHomeModal(true)}>
                <img src={dollarSign} alt="dollar" />
            </button>
            <button 
            className="circle1 homeTransac"
            onClick={() => navigate("/transactions")}>
                <img src={receipt} alt="transac-icon" />
            </button>
            <section className="homePage">
                <img src={homeImg} alt="home" className="origHome" />
                <img src ={altHomeImg} alt="home" className="mediaHome" />
            </section>
            <p>
                <a href="https://github.com/DestinyJoyner" target="_blank">
                    <img src={gitHub} alt="git-icon" className="a-tags" />
                </a>
                <span>Destiny J.</span>
                <a href="https://www.linkedin.com/in/destiny-joyner-934846243/" target="_blank">
                <img src={linkedIn} alt="linkedIn-icon" className="a-tags" />
                </a>
            </p>
        </div>
    );
}

export default HomePage;