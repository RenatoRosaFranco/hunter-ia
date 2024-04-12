import React from "react";

import Statistics from '../../components/Statistics/Index';
import Hero       from '../../components/Hero/Index';
import WhyUs      from '../../components/WhyUs/Index';
import AboutUs    from '../../components/AboutUs/Index';
import Divisions  from '../../components/Divisions/Index';

import './style.scss';

const HomePage = () => {
  return(
    <>
      <Hero />
      <Statistics />
      <WhyUs />
      <AboutUs />
      <Divisions />
    </>
  )
}

export default React.memo(HomePage);