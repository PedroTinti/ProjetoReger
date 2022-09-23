import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./assets/components/Navebar/nevbar";
import Fazemos from "./assets/components/O_que_fazemos/fazemos";
import Projeto from "./assets/components/Projeto/projeto";
import Como from "./assets/components/Como/como";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Projeto />
        <Fazemos />
        <Como />
      </main>
    </>
  );
}

export default App;
