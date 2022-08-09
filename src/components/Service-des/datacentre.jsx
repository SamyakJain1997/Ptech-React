import React from 'react';
import './service-des.css';
import Data from '../../assets/blog08.png';

const DataCenter = () => {
  return (
    <div className="service_description_banner" id="blog/DataCenter">
      <h1 className="gradient__text">Data Center Design & Solutions</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Data} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>At PTech, we provide unified and futuristic data center innovative solutions ranging from Converged DC  
          to Software Defined Network for DC and Network Function Virtualization. Our services also include Platform 
          tech refresh and DC Network Migration. </p>
        <h3>As part of the network planning We offer the customers following services:</h3>
        <ul>
          <li>Data Center Network Design</li>
          <li>Innovative and futuristic Data Centre Solutions, designed to deliver a simplified yet robust DC network</li>
          <li>Converged DC to Software Defined Network for DC.</li>
          <li>Network Function Virtualization.</li>
          <li>Platform tech refresh and DC Network Migration and Cloud Integrations.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default DataCenter;
