import "./Entete.css";
import logoentete from "../assets/clair.png";
import logoentete2 from "../assets/logo.svg";
import soleil from "../assets/icon-sun.svg";
import lune from "../assets/icon-moon.svg";

function Entete({ sombre, setSombre }) {
  return (
    <div className="entete">
      <img src={sombre ? logoentete : logoentete2} alt="logo" className="logoentete" />
      <button
        className="theme"
        onClick={() => (sombre ? setSombre(false) : setSombre(true))}
      >
        <img
          src={sombre ? soleil : lune}
          alt={sombre ? "Soleil" : "Lune"}
          className="soleil"
        />
      </button>
    </div>
  );
}

export default Entete;