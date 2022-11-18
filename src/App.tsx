import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./assets/components/Navebar/nevbar";
import Fazemos from "./assets/components/O_que_fazemos/fazemos";
import Projeto from "./assets/components/Projeto/projeto";
import Como from "./assets/components/Como/como";
import Credito from "./assets/components/credito/credito";
import Onde from "./assets/components/onde_estamos/onde";
import Dicas from "./assets/components/dicas/dicas";

function App() {
  return (
    <>
      
        <main >
          <Navbar />
          <Projeto />
          <Fazemos />
          <Como />
          <Onde />
          <Dicas />
          <Credito />
        </main>
    </>
  );
}

export default App;
