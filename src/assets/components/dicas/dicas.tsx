import React from 'react';
import Collapsible from 'react-collapsible';
import "./dicas.css"

function Dicas(){
    return(
        <section className="body_dicas">
            <div className="titulo_dicas">
            <h1>Dicas</h1>
            <br />
                <Collapsible className='texto1' trigger="Quais são os tipos de resíduos: ">
                        <p>
                            Domiciliares -
                            Limpeza urbana -
                            Sólidos urbanos -
                            Estabelecimentos comerciais e prestadores de serviços -
                            Serviços públicos de saneamento básico -
                            Industriais -
                            Serviços de saúde -
                            Construção civil -
                            Agrossilvopastoris -
                            Serviços de transportes - 
                            Mineração

                        </p>
                       
                </Collapsible>
                <br />
                <Collapsible className='texto1' trigger="Como armazenar os resíduos:">
                    
                        <p>
                            Para o correto armazenamento não misture os resíduos recicláveis com os orgânicos. Os resíduos recicláveis devem ser lavados e secados antes de armazenar. Papéis devem estar secos e não podem ser amassados, somente dobrados. Os resíduos de vidro devem ser colocados em uma caixa para evitar acidentes
                        </p>
                       
                </Collapsible>
                <br />
                <Collapsible className='texto1' trigger="Materiais Eletroeletrônicos, Lâmpadas Frias e Latas de Spray vazias, como descartar? ">
                   
                        <p>
                            Certifique-se de que a lata esteja realmente vazia.
                            Se a embalagem tiver uma tampinha de plástico, pode retirar e jogar no lixo reciclável de sua casa.
                            Leve as latas vazias para serem descartadas em locais que aceitem o produto.
                        </p>
                        
                </Collapsible>
                <br />
                
                
                
            </div>
                
        </section>
            
        
    );
}

export default Dicas;