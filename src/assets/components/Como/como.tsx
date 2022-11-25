import "./como.css";

function Como() {
  return (
    <section className="body_como">
      <h1>Como Fazemos</h1>

      <div className="video_como">
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/FkzpNFv-E8g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="box_flex_como">
        <div className="box_cima">
          <p>O Projeto de Extensão Redução da Geração de Resíduos (REGER) do UNISAGRADO é desenvolvido desde o ano de 2016, com o objetivo de concretizar o tema sustentabilidade no campus e orientar a todos os que o frequentam sobre a destinação correta dos resíduos</p>
          <p>Capacitação dos Funcionários para a correta destinação do resíduos; Elaboração de vídeo com orientações sobre o correto descarte de resíduos; Reorganização do setor de descarte de resíduos recicláveis e obtenção de uma máquina que fragmenta papéis, plásticos e CDs.</p>
          <p>Por meio do projeto, que ocorre durante todos os semestres, busca-se adotar medidas, que foram previamentes estudadas, e que possibilitam a redução do consumo ou a mudança de hábitos que afetam diretamente a quantidade de resíduos produzidos no campus.</p>
        </div>
        <div className="box_baixo">
          <p>“Atualmente o Reger propõe, através de projeto de extensão, semestralmente, capacitações para a continuidade das ações de correto gerenciamento, separação e destinação dos resíduos, bem como elabora e implementa propostas de sustentabilidade"</p>
          <p>Em seu início, a implementação do estudo foi realizada em duas fases. A primeira etapa, abrangeu o diagnóstico dos resíduos gerados nos setores (químicos, biológicos, de saúde, orgânicos e recicláveis) e foi realizada pelos estudantes do respectivo projeto de extensão.</p>
          <p>Em média, os rejeitos gerados no campus foram diminuidos em mais de 50%.  A Prof. Dra. Beatriz Antoniassi conta que, atualmente, através do Reger, foi possível alcançar o objetivo de implementar a cultura de sustentabilidade na IES</p>
        </div>

      </div>
    </section>
  );
}

export default Como;
