import { useContext } from "react";
import { ContextData } from "./Provider";
import HomeModal from "./HomeModal";
import "./HomePage.css"
import homeImg from "../assets/budget-home.png"
import dollarSign from "../assets/spin-dollar(2).gif"

function HomePage() {
    const {setHomeModal} = useContext(ContextData)


    return (
        <div className='home'>
            <HomeModal />
            <h1>Budget App</h1>
            <button 
            className="circle1"
            onClick={() => setHomeModal(true)}>
                    <img src={dollarSign} alt="dollar" />
            </button>
            <section className="homePage">
                <img src={homeImg} alt="home" />
            </section>
            <p>Destiny J.</p>
        </div>
    );
}

export default HomePage;