import React from 'react';
import './service-des.css';
import rfplan from '../../assets/blog02.png';

const rfplanning = () => {
  return (
      <div className="service_description_banner" id="blog/rfplanning">
      <h1 className="gradient__text">RF Planning & Designing</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={rfplan} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>PTech’s resources are well trained to use state-of-the-art industry standard tools for design, planning and testing the networks
          to ensure that the network design meets the network performance  
          objectives of the customer.</p>
        <h3>As part of the RF Planning & Designing We offer the customers following services:</h3>
        <ul>
          <li>RF Cell Planning </li>
          <li>Initial dimensioning of the radio network.</li>
          <li>CW Propagation model tuning .</li>
          <li>Candidate identification & nominal planning.</li>
          <li>Technical site surveys » Frequency Planning .</li>
          <li>Static frequency allocation.</li>
          <li>Frequency hopping (RF hopping or Baseband hopping).</li>
          <li>Frequency and neighbors planning.</li>
          <li>Hierarchical Cell structure.</li>
          <li>Capacity Planning.</li>
          <li>Coverage and capacity planning and analysis.</li>
          <li>Addition of new cell sites.</li>
          <li>Upgrade of existing cell sites.</li>
          <li>Signaling/SDCCH dimensioning.</li>
          <li>Additional spectrum use.</li>
          <li>Traffic Management.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default rfplanning;
