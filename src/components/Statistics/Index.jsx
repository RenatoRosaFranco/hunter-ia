import React from "react";
import './style.scss';

const Statistic = ({ statistic }) => {
  return(
    <div className="col-md-6">
      <i className={`${statistic.icon} icon`} />
      <h2 className="bold">{statistic.title}</h2>
      <p>{statistic.description}</p>
    </div>
  )
}

const Statistics = () => {
  return(
    <section id="statistics">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary btn-lg">
              Acesse todas as vagas
            </button>
            <br />

            {Statistics.map((statistic, index) => (
              <Statistic key={index} statistic={statistic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Statistics);