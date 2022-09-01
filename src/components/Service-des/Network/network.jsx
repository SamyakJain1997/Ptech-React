import React from 'react';
import './network.css';
import networksol from '../../../assets/blog01.png';

const Network = () => {
  return (
<div className="network_description-banner" id="blog/Automation">
        <div className="network_data">
          <div className="network-position-relative">
            <img className="network_image" src={networksol} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Network Implementation</h1></p></caption>
              </div>
          </div>
          <div className="network_description_data">
            <p>Operator facing challenges are extensive and unavoidable. New technology, Coverage, Capacity, and Maximizing the Value of Existing Network Resources, are challenging requirements. Network Planning is crucial networks for designing any network. PTECH helps customer not only in Network design but also in expanding rapidly and cost effectively.</p>
            <h3 className="network_description_data_heading">As part of the RF Planning & Designing We offer the customers following services:</h3>
            <div className='network_description-div' >
              <ul className="network-des-container">
              <ul>Network Design and Dimensioning (IP/MPLS,RF)</ul>
              <ul>Access Network Planning.</ul>
              <ul>Transmission and Synchronization plan.</ul>
              <ul>Switching Network Topology.</ul>
              <ul>Techno-commercial Bid preparations.</ul>
              <ul>BOQ Recommendations and Validations</ul>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Network;
