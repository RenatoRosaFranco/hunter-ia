import React from "react";
import './styles.css';

const AboutPage = () => {
  return(
    <section id="about-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron"></div>
          </div>

          <div className="col-md-6">
            <h1 className="bold">Quem somos</h1>
            <p>A Hunter Recrutamento Especializado e Consultoria é uma
            empresa especializada em soluções de recursos humanos com
            foco em recrutamento e seleção, outsourcing e projetos
            especiais de hunting nacional e internacional.
            </p>
          </div>

          <div className="col-md-6">
            <p>Com mais de 20 anos de expertise no mercado de tecnologia e
            recrutamento, seus idealizadores trazem em seu nome e em seu
            DNA a caça (HUNT) dos profissionais mais adequados com cada
            necessidade de seus clientes.
            </p><br />

            <p>Somos reconhecidos pela quantidade nos nossos processos,
            transparência em nossas ações e pela busca constante de
            ferramentas inovadoras em nossa dinâmica de trabalho.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="jumbotron"></div>
          </div>

          <div className="col-md-6">
            <h4 className="bold">Missão</h4>
            <p>Oferecer soluções em Recursos Humanos para clients de forma,
            ousada, diferenciada e personalizada, como parceiro estratégico,
            buscando atender as suas necessidades em recrutamento e seleção,
            provendo talentos e reconhecendo o potencial do capital humano.
            </p>
            <br />

            <h4 className="bold">Visão</h4>
            <p>Continuar crescendo a ser refêrencia para empresas quando pensam
            em recrutamento especializado, no mercado nacional e internacional.
            </p>
          </div>
        </div>

        <div className="row">
          <h1 className="bold-text-center">Nosso Diferenciais</h1>
          <br />

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <h4 className="bodl text-center">Experiência</h4>
                <p>São mais de 20 anos atuando
                exclusivamente com recrutamento de
                profissionais no mercado.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <h4 className="bold text-center">Equipe Técnica</h4>
                <p>São mais de 20 anos atuando
                exclusivamente com recrutamento de
                profissionais no mercado.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <h4 className="bold text-center">Eficiência</h4>
                <p>São mais de 20 anos atuando
                exclusivamente com recrutamento de
                profissionais no mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(AboutPage);