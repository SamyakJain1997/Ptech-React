import React from 'react';
import './service-des.css';
import Resource from '../../assets/blog06.png';

const ResourceManage = () => {
  return (
    <div id="blog/ResourceManage">
<div className="service_description_banner" id="blog/network">
      <h1 className="gradient__text">Resource Management</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Resource} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>Having the best talent is a competitive advantage in today’s demanding and 
          complex world  The success of any business relies upon talent; acquiring 
          the most qualified people is increasingly competitive. PTECH provides placement 
          and deployment of resource as a service. We have a databank of qualified experts 
          and professionals .Our HR team excels in recruitment and training,which results 
          in retention of skilled resources.</p>
        <h3>We provide Quality Resources as:</h3>
        <ul>
          <li>RF Planner.</li>
          <li>RF Optimization Engineer.</li> 
          <li>Transmission Planner.</li> 
          <li>Drive Testers.</li> 
          <li>Data Analysts.</li> 
          <li>RF & LOS Survey Engineer.</li> 
          <li>EMF Survey Engineer.</li> 
          <li>Resident Engineers/Solution Architect.</li> 
          <li>OSS/BSS Engineer .</li>
          <li>O&M Engineer (ISP/OSP).</li>
          <li>NOC Engineer.</li>
          <li>IBS Planner.</li> 
          <li>Project Managers.</li>
          <li>Automation Developers.</li> 
        </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ResourceManage;
