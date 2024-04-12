import React from "react";
import areasData from '../../data/areas.json';
import './style.scss';

const Area = ({ area }) => {
  return(
    <div className="col-md-3">
      <div className="panel panel-default">
        <div className="panel-body">
          <h1 className="bold">
            <i className={area.icon}></i>
          </h1>
          <h4 className="bold">{area.name}</h4>
          <p>{area.description}</p>
        </div>
      </div>
    </div>
  );
}

const Areas = () => {
  let areas = areasData;

  return(
    <section id="area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="bold text-center">Algumas áreas que atendemos</h1>
            <br />

            <div className="row">
              {areas.map((area, index) => (
                <Area key={index} area={area} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Areas);