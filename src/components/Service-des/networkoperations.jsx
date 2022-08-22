import React from 'react';
import './service-des.css';
import Netoperation from '../../assets/blog04.png';

const Networkoperation = () => {
  return (
     <div className="service_description_banner" id="blog/Networkoperation">
      <h1 className="gradient__text">Network Operations Services</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Netoperation} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>Network performance is a measure of how effectively and efficiently the 
          network is functioning. Network performance is an internal measure mainly 
          derived from Network Management data. This measure provides an Engineering 
          perspective of network quality.</p>
        <h3>As part of the Network Operations Services, We offer the customers following services:</h3>
        <ul>
          <li>Provide Subscriber perception of service.</li>
          <li>Benchmark figures against competitors.</li>
          <li>QoS reports for Senior Management.</li> 
          <li>Analysis and evaluation of network upgrades.</li>
          <li>Acceptance testing of new networks / new regional rollouts.</li>
          <li>Independent benchmarking of vendor equipment's.</li>
          <li>Continuous/repetitive monitoring to highlight slow degradation of Network Quality Provision of Engineering data for further analysis.</li>
          <li>Network Auditing and Remediation Services.</li> 
          <li>Network Monitoring and Surveillance Solutions/Services.</li>
          <li>Automated Incident Management Solutions/Services.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Networkoperation;
