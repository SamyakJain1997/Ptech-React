import React from 'react';
import './service-des.css';
import Rfopt from '../../assets/blog03.png';
// import Network from '../../assets/network.jpg';

const RfOptimization = () => {
  return (
<div className="service_description_banner" id="blog/RfOptimization">
      <h1 className="gradient__text">RF Optimization & Drive Test</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Rfopt} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>High quality of service in mobile networks is the prerequisite for the commercial success.
           Continuous optimization is a process, which focuses on checking the network quality continuously
           and takes actions when needed. It is a more constant way of maintaining good quality in the network,
          especially when the mobile networks are changing rapidly and more and more customers are being served.</p>
        <h3>As part of the RF Optimization, We offer the customers following services:</h3>
        <ul>
          <li>Parameter Configuration Check (OMC Audit).</li>
          <li>Traffic and throughput analysis.</li>
          <li>Parameter planning and optimization.</li>
          <li>Dropped call analysis.</li>
          <li>Handover success analysis.</li>
          <li>Drive Test analysis.</li>
          <li>Interference analysis.</li>
          <li>Field measurements and acceptance testing.</li>
          <li>Frequency & Strategy Planning.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default RfOptimization;
