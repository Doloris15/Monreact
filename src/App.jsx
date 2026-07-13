import { useState, useEffect } from "react";
import "./App.css";
import Entete from "./components/Entete";
import SousEntete from "./components/SousEntete";
import Grille from "./components/Grille";
import Carte from "./components/Carte";

function App() {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const avecId = data.map((ext, index) => ({ ...ext, id: index }));
        console.log(avecId);
        setExtensions(avecId);
      })
      .catch((err) => console.log("Erreur:", err));
  }, []);

  const remove = (id) => {
    console.log("remove appele id",id)
    setExtensions((exts)=> [...exts.slice(0,id), ...exts.slice(id+1)]
      );
  };

  return (
    <div className="App">
      <Entete />
      <SousEntete />
      <Grille>
        {extensions.map((ext) => (
        <Carte key={ext.id} extension={ext} onRemove={remove} />
        ))}
      </Grille>
    </div>
  );
}

export default App;