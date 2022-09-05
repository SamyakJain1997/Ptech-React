import React from 'react';
import './Automation.css';
import Automations from '../../../assets/blog07.jpeg';

const Automation = () => {
  return (
<div className="automation_description-banner" id="blog/Automation">
        <div className="automation_data">
          <div className="automation-position-relative">
            <img className="automation_image" src={Automations} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Automation Solutions</h1></p></caption>
              </div>
          </div>
          <div className="automation_description_data">
            <p>In the era of 5G and cloud, automation is becoming essential to managing 
          network and infra. Automation reduces human errors, the most common cause 
          of network performance degradation and downtime, making automated networks
          more reliable. Service providers and large enterprises can also use 
          automation to reduce time to market, improve customer experiences, and meet 
          growing scalability demands with simplified network operations. The result is 
          greater network efficiency, uptime, and consistency across the board.</p>
            <h3 className="automation_description_data_heading">As part of the RF Planning & Designing We offer the customers following services:</h3>
            <div className='automation_description-div' >
              <ul className="automation-des-container">
              <ul>Closed Loop Automation.</ul>
              <ul>Auto Auditing and Remediation.</ul>
              <ul>Upgradation and Migration Automation.</ul>
              <ul>Smart Fault Management.</ul>
              <ul>Service Orchestration.</ul>
              <ul>Analytics for Network Operations.</ul>
              <ul>AI-Powered Network/Telco Automation.</ul>
              <ul>OSS/BSS Solutions and Integrations.</ul> 
              <ul>DevOps/NetOps Solutions.</ul> 
              <ul>CI/CD Pipelining.</ul> 
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Automation;
