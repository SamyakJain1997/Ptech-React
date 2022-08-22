import React from 'react';
import './service-des.css';
import Automations from '../../assets/blog07.png';

const Automation = () => {
  return (
     <div className="service_description_banner" id="blog/Automation">
      <h1 className="gradient__text">Automation Solutions</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Automations} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>In the era of 5G and cloud, automation is becoming essential to managing 
          network and infra. Automation reduces human errors, the most common cause 
          of network performance degradation and downtime, making automated networks
          more reliable. Service providers and large enterprises can also use 
          automation to reduce time to market, improve customer experiences, and meet 
          growing scalability demands with simplified network operations. The result is 
          greater network efficiency, uptime, and consistency across the board.</p>
        <h3>As part of Automation Solutions, We offer the customers following services:</h3>
        <ul>
          <li>Closed Loop Automation.</li>
          <li>Auto Auditing and Remediation.</li>
          <li>Upgradation and Migration Automation.</li>
          <li>Smart Fault Management.</li>
          <li>Service Orchestration.</li>
          <li>Analytics for Network Operations.</li>
          <li>AI-Powered Network/Telco Automation.</li>
          <li>OSS/BSS Solutions and Integrations.</li> 
          <li>DevOps/NetOps Solutions.</li> 
          <li>CI/CD Pipelining.</li>  
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Automation;
