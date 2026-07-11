import "./Entete.css";
import  logoentete from"../assets/logo.svg"
import soleil from "../assets/icon-sun.svg"

function Entete(){
    return(   
        <div className="entete">
            <img src={logoentete} alt="logo" className="logoentete"/>
            <button className="theme">
                <img src={soleil} alt="Soleil"  className="soleil"/>
            </button>
        </div> 
      );
}
export default Entete;