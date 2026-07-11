import "./SousEntete.css"
function SousEntete(){
    return(
        <div className="sousentete">
            <h2 className="titre">Extension List</h2>

            <div className="choisir">
                <button className="choix actif">
                    All
                </button>
                <button className="choix">
                    Active
                </button>
                <button className="choix">
                    Inactive
                </button>
            </div>
        </div>
    );
}
export default SousEntete;