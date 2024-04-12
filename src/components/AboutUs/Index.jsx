import React from "react";
import './style.scss';

const AboutUs = () => {
  return(
    <section id="statistics">
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="jumbotron"></div>
              </div>

              <div className="col-md-6">
                <div className="jumbotron"></div>
              </div>

              <div className="col-md-6">
                <div className="jumbotron"></div>
              </div>

              <div className="col-md-6">
                <div className="jumbotron"></div>
              </div>

              <div className="col-md-6">
                <div className="jumbotron"></div>
              </div>

              <div className="col-md-6">
                <div className="jumbotron"></div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="bold">Quem somos</h1>
            <p>A HIA é a divisão de recrutamento de TI da Hunter.
              Nosso braço de TI é especializado em soluções de
              rescursos humanos com foco em recrutamento e seleção
              de prifissionais no mundo de tecnologia.
            </p>
            <br />

            <p>Com mais de 15 anos de expertise no mercado de tecnologia,
              e recrutamento, seus idealizadores trazem em seu nome e em seu DNA
              a caça (HUNT) dos profissionais mais adequados com nada
              necessidade de seus clientes.
            </p>
            <br />

            <p>Somos reconhecimos pela qualidade nos nossos processos,
              transparência em nossas ações e pela busca constande de
              ferramentas inovadoras em nossa dinâmica de trabalho.
            </p>

            <br />
            <button className="btn btn-primary btn-lg top">
              Conheça outras soluções da Hunter
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(AboutUs);