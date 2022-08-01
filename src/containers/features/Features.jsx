import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'VISION',
    text: 'We at PTech offer extensive services in the telecom sector and are equipped to respond to the industrial changes with a fine blend of industry knowledge, targeted services, technology and functional expertise with a proven delivery model. By leveraging the onsite-offshore virtual model in the telecom solution space as well, P Tech ensures our client receives “to the specification, on time, within budget” delivery. Our comprehensive Telecom solutions portfolio enables in taking advantage of the changing trends in the Telecom industry.',
  },
  {
    title: 'MISSION',
    text: 'To Become One Stop Telco/IT Solution provider, with the commitment to deliver End-to-End,Accurate, Quality Solutions at Cost Effective Terms to our esteemed clients. Our goal is tobecome a leading network planning and optimizing company. Our dedicated and capableengineers ensure that all the projects are driven by challenging performance benchmarks andour final deliverables result in quantifiable improvement in the network quality andperformance',
  },
  {
    title: 'VALUES',
    text: 'Continuous Innovation, Transparency, Integrity, Customer Centric, Respect for People. Our philosophy goes beyond meeting client requirements. We meet your needs by putting. ourselves in your shoes and thinking of unforeseen situations that you may come across.',
  },
];

const Features = () => (
  <div className="ptech__features section__padding" id="features">
    <div className="ptech__features-heading">
      <h1 className="gradient__text">We at PTECH, are committed to achieve good quality of Work without spending any extra time than that predefined, by applying professional practices and deputing appropriate resources for specific project.</h1>
      <p>We aim for total customer satisfaction and seek to achieve conformity by carrying out quality awareness activities at all stages of development</p>
    </div>
    <div className="ptech-bg-img">.</div>
    <div className="ptech__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
