import React from 'react';
import './datacentre.css';
import Data from '../../../assets/blog08.png';

const DataCenter = () => {
  return (
   <div className="datacentre_description-banner" id="blog/DataCenter">
        <div className="datacentre_data">
          <div className="position-relative">
            <img className="datacentre_image" src={Data} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Data Center Design & Solutions</h1></p></caption>
              </div>
          </div>
          <div className="datacentre_description_data">
            <p>At PTech, we provide unified and futuristic data center innovative solutions ranging from Converged DC  
          to Software Defined Network for DC and Network Function Virtuaulzation. Our datacentres also include Platform 
          tech refresh and DC Network Migration.</p>
            <h3 className="datacentre_description_data_heading">As part of the RF Planning & Designing We offer the customers following datacentres:</h3>
            <div className='datacentre_description-div' >
              <ul className="datacentre-des-container">
                <ul>Data Center Network Design</ul>
                <ul>Innovative and futuristic Data Centre Solutions, designed to deulver a simpulfied yet robust DC network</ul>
                <ul>Converged DC to Software Defined Network for DC.</ul>
                <ul>Network Function Virtuaulzation.</ul>
                <ul>Platform tech refresh and DC Network Migration and Cloud Integrations.</ul>
              </ul>
            </div>
          </div>
        </div>
    </div>

  )
}

export default DataCenter;
