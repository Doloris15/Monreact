import "./Carte.css";

function Carte({extension,onToggle,onRemove}){
    return(
        <div className="Carte">
            <div className="Carte-haut">
                <img src={extension.logo} alt={extension.name} className="carte-icone"/>
                <div><h3 className="carte-nom">{extension.name}</h3>
                <p className="carte-description">{extension.description}</p>
                </div>
            </div>

            <div className="Carte-bas">
                <button className="btn-remove" onClick={() => onRemove(extension.id)  } >
                    Remove
                </button>

                <button className={extension.isActive ? "toggle actif" : "toggle"}
                    onClick={() => onToggle(extension.id)}
                >
                    <span className="toggle-round"></span>
                </button>
            </div>
        </div>
    )
}
export default Carte; 