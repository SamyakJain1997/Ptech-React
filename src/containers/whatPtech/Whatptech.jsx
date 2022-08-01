import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatptech.css';

const Whatptech = () => (
  <div className="ptech__whatptech section__margin" id="wptech">
    <div className="ptech__whatptech-feature">
      <Feature title="Why Choose Us" text="Our goal is to become a leading network planning and optimizing company. Our dedicated andcapable engineers ensure that all the projects are driven by challenging performancebenchmarks and our final deliverables result in quantifiable improvement in the networkquality and performance." />
    </div>
    <div className="ptech__whatptech-heading">
      <h1 className="gradient__text">Ptech in Nutshell</h1>
      <p>Our Approach</p>
    </div>
    <div className="ptech__whatptech-container">
      <Feature title="Domain Expertise" text="End-to-end Network Planning & Optimization. Accurate, Quality Solutions at Cost Effective Terms" />
      <Feature title="Innovation" text="Visionary Management & Experienced Workforce" />
      <Feature title="Productivity" text="Process Oriented Outcome and System driven" />
      <Feature title="Intelligence" text="Objectively designed as a productivity booster & best in class customer experience" />
      <Feature title="Customer Experience" text="Flexible solution, with simple & fast configuration" />

    </div>
  </div>
);

export default Whatptech;
