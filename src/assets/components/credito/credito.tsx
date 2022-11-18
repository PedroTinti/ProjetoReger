import "./credito.css";

function Credito(){
    return(
        <section className="body_credito">
            <img src="/src/assets/components/credito/uni.png" alt="LOGO" />
            <div className="box_desing">
                <h3>Alunos de desing</h3>
                <p>Gabriela Ponce de Leon Nabas</p>
                <p>Giovanna Paveloski </p>
                <p>Pedro Henrique Fernandes </p>
            </div>

            <div className="box_cien">
                <h3>Alunos de ciência da computação</h3>
                <p>Pedro Lucas Tinti</p>
                <p>Brian Henrique Araújo Picao</p>
                <p>Rodolfo Gustavo Rossini Filho</p>
                <p>Rafael de Oliveira Gasparotto</p>
            </div>

            <div className="box_profess"> 
                <h3>Professores responsaveis matéria extensionista</h3>
                <p>Professora Sileide Paccola</p>
                <p>Professor Vinicius Santos Andrade</p>
                
            </div>
        
        </section>

    );

}

export default Credito;
