import { useState, useEffect } from "react";
import "./App.css";
import Entete from "./components/Entete";
import SousEntete from "./components/SousEntete";
import Grille from "./components/Grille";
import Carte from "./components/Carte";

function App() {
  const [extensions, setExtensions] = useState([]);
  const [choix, setChoix] = useState("All");
  const [sombre, setSombre] = useState(true);

  // change l'attribut data-theme sur <body> à chaque changement de sombre
  if (sombre) {
    document.querySelector("body").setAttribute("data-theme", "dark");
  } else {
    document.querySelector("body").setAttribute("data-theme", "light");
  }

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const avecId = data.map((ext, index) => ({ ...ext, id: index }));
        setExtensions(avecId);
      })
      .catch((err) => console.log("Erreur:", err));
  }, []);

  const remove = (id) => {
    setExtensions((exts) => [...exts.slice(0, id), ...exts.slice(id + 1)]);
  };

  const toggle = (position) => {
    const copie = [...extensions];
    copie[position].isActive = !copie[position].isActive;
    setExtensions(copie);
  };

  let extensionAffichees = [];

  if (choix === "All") {
    extensionAffichees = extensions;
  } else if (choix === "Active") {
    extensionAffichees = extensions.filter((ext) => ext.isActive);
  } else if (choix === "Inactive") {
    extensionAffichees = extensions.filter((ext) => !ext.isActive);
  }

  return (
    <div className="App">
      <Entete sombre={sombre} setSombre={setSombre} />
      <SousEntete choix={choix} choisir={setChoix} />
      <Grille>
        {extensionAffichees.map((ext) => (
          <Carte key={ext.id} extension={ext} onRemove={remove} onToggle={toggle} />
        ))}
      </Grille>
    </div>
  );
}

export default App;