import React from 'react';
import './style.csss';

const Divisions = () => {
  return(
    <section id="divisions">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Nossas Divisões</h1>
            <br />

            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="bold">Hunter Tech</h3>
                  <p>Hunting especializado no mercado
                    de tecnologia, conectando empresas
                    com os melhores profissionais de mercado
                  </p>

                  <br />
                  <button className='btn btn-primary btn-lg'>
                    Conheça
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="bold">Hunter Exec</h3>
                  <p>Hunting especializado no mercado
                    de tecnologia, conectando empresas
                    com os melhores profissionais de mercado
                  </p>

                  <br />
                  <button className='btn btn-primary btn-lg'>
                    Conheça
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="bold">Hunter Espec</h3>
                  <p>Hunting especializado no mercado
                    de tecnologia, conectando empresas
                    com os melhores profissionais de mercado
                  </p>

                  <br />
                  <button className='btn btn-primary btn-lg'>
                    Conheça
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Divisions);