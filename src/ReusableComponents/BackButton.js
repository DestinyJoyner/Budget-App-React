import back from "../assets/return-arrow.png"

function BackButton({color}) {
    return (
        <div className="circle1"
        style={{backgroundColor: `${color}ea`}}>
            <img 
            src={back} 
            alt="go-back" 
            className="go-back"
             />
        </div>        
    );
}

export default BackButton;