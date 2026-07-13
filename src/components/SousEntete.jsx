import "./SousEntete.css";
function SousEntete({choix, choisir}){
    return(
        <div className="sousentete">
            <h2 className="titre">Extension List</h2>

            <div className="choisir">
                <button className= {choix === "All" ? "choix actif" : "choix"} 
                onClick={() => choisir("All")}>
                    All
                </button>
                <button className={choix === "Active" ? "choix actif" : "choix"}   
                    onClick={() => choisir("Active")}>
                    Active
                </button>
                <button className={choix === "Inactive" ? "choix actif" : "choix"} 
                    onClick={() => choisir("Inactive")}>
                    Inactive
                </button>
            </div>
        </div>
    );
}
export default SousEntete;