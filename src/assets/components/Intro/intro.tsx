import "./intro.css";

function Intro() {
  return (
    <section id="intro" className="intro whitebg">
      <div className="intro_text">
        <h2>
          O Projeto REGER engloba diversos setores da Unisagrado, com o foco na
          minimização na geração de resíduos
        </h2>
        <p>
          Pautado nos princípios dos 5Rs e nos ODs da ONU: redução no consumo e
          desperdício, reutilização e reciclagem de materiais.
        </p>
        <a href="#">
          <button className="boton-principal">Conheça mais sobre</button>
        </a>
      </div>
    </section>
  );
}

export default Intro;
