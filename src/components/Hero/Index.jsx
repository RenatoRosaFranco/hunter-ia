import React from "react";
import './style.scss';

const Hero = () => {
  return(
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
              <h2 className="bold">
                Selecionar candidatos
                com a Hunter dará ao seu
                negócio uma vantagem sobre seus concorrentes
              </h2>
            </div>

            <div className="col-md-3">
              <h2 className="bold">
                Somos referência em
                vagas internacionais,
                com trabalhos reconhecidos,
                em grandes empresas globais
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);