import React from 'react';
import './networkoperations.css';
import Netoperation from '../../../assets/blog04.jpeg';

const Networkoperation = () => {
  return (
     <div className="networkoperations_description-banner" id="blog/Networkoperation">
        <div className="networkoperations_data">
          <div className="networkoperations-position-relative">
            <img className="networkoperations_image" src={Netoperation} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Network Operations Services</h1></p></caption>
              </div>
          </div>
          <div className="networkoperations_description_data">
            <p>Network performance is a measure of how effectively and efficiently the 
          network is functioning. Network performance is an internal measure mainly 
          derived from Network Management data. This measure provides an Engineering 
          perspective of network quality.</p>
            <h3 className="networkoperations_description_data_heading">As part of the Network Operations Services, We offer the customers following services:</h3>
            <div className='networkoperations_description-div' >
              <ul className="networkoperations-des-container">
          <ul>Provide Subscriber perception of service.</ul>
          <ul>Benchmark figures against competitors.</ul>
          <ul>QoS reports for Senior Management.</ul> 
          <ul>Analysis and evaluation of network upgrades.</ul>
          <ul>Acceptance testing of new networks / new regional rollouts.</ul>
          <ul>Independent benchmarking of vendor equipment's.</ul>
          <ul>Continuous/repetitive monitoring to highlight slow degradation of Network Quality Provision of Engineering data for further analysis.</ul>
          <ul>Network Auditing and Remediation Services.</ul> 
          <ul>Network Monitoring and Surveillance Solutions/Services.</ul>
          <ul>Automated Incident Management Solutions/Services.</ul>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Networkoperation;
