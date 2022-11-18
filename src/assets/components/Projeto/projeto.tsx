import "./projeto.css";

function Projeto() {
  return (
    <section id="intro" className="intro whitebg">
      <div className="intro_text">
        <h2>
          O Projeto REGER engloba<br /> diversos  setores da Unisagrado,<br /> com o foco na 
          minimização na <br /> geração de resíduos
        </h2>
        <p>
          Pautado nos princípios dos 5Rs e nos ODs  da <br /> ONU: redução no consumo e
          desperdício, <br /> reutilização e reciclagem de materiais.
        </p>
        <a href="#">
          <button className="boton-principal"><a href="https://unisagrado.edu.br/projetos/reger-reducao-na-geracao-de-residuos" target="_blank" >Conheça mais sobre</a></button>
        </a>
      </div>
    </section>
  );
}

export default Projeto;
