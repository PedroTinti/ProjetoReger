import React from 'react';
import Collapsible from 'react-collapsible';
import "./dicas.css"

function Dicas(){
    return(
        <section className="body_dicas">
            <div className="titulo_dicas">
            <h1>Dicas</h1>
            <br />
                <Collapsible className='texto1' trigger="COMECE AQUI">
                        <p>
                            Este é o conteúdo dobrável. Pode ser qualquer elemento ou componente React que você goste.
                            Pode até ser outro componente dobrável. Confira a próxima seção!
                        </p>
                       
                </Collapsible>
                <br />
                <Collapsible className='texto1' trigger="COMECE AQUI">
                        <p>
                            Este é o conteúdo dobrável. Pode ser qualquer elemento ou componente React que você goste.
                            Pode até ser outro componente dobrável. Confira a próxima seção!
                        </p>
                       
                </Collapsible>
                <br />
                <Collapsible className='texto1' trigger="COMECE AQUI">
                        <p>
                            Este é o conteúdo dobrável. Pode ser qualquer elemento ou componente React que você goste.
                            Pode até ser outro componente dobrável. Confira a próxima seção!
                        </p>
                        
                </Collapsible>
                <br />
                <Collapsible className='texto1' trigger="COMECE AQUI">
                        <p>
                            Este é o conteúdo dobrável. Pode ser qualquer elemento ou componente React que você goste.
                            Pode até ser outro componente dobrável. Confira a próxima seção!
                        </p>
                    
                </Collapsible>
                <br />
                
                
            </div>
                
        </section>
            
        
    );
}

export default Dicas;