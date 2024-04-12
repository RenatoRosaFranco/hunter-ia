import React from "react";
import benefitsData from '../../data/benefits';
import './styles.scss';

const Benefit = ({ benefit }) => {
  return(
    <div className="col-md-4">
      <div className="panel panel-default">
        <i className={`${benefit.icon} icon`} />
        <h4 className="bold title">{benefit.name}</h4>
        <p className="description">{benefit.description}</p>
      </div>
    </div>
  );
}

const WhyUs = () => {
  let benefits = benefitsData;

  return(
    <section id="why-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Por que Recrutar profissionais de TI com a Hunter</h1>
            <br />

            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(WhyUs);