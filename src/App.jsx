import React, { useState } from "react";
import Home from "./components/Home";
import Logueo from "./components/Logueo";

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  return (
    <div className="wrapper">
      {usuarioGlobal ? <Home /> : <Logueo />}
    </div>
  );
}

export default App;
