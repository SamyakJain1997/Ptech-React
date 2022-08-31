import React from 'react';
import './rfplanning.css';
import rfplan from '../../../assets/blog02.png';

const rfplanning = () => {
  return (
      <div className="rfplanning_description-banner" id="blog/rfplanning">
        <div className="rfplanning_data">
          <div className="position-relative">
            <img className="rfplanning_image" src={rfplan} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">RF Planning & Designing</h1></p></caption>
              </div>
          </div>
          <div className="rfplanning_description_data">
            <p>PTech’s resources are well trained to use state-of-the-art industry standard tools for design, planning and testing the networks
          to ensure that the network design meets the network performance  
          objectives of the customer.</p>
            <h3 className="rfplanning_description_data_heading">As part of the RF Planning & Designing We offer the customers following services:</h3>
            <div className='rfplanning_description-div' >
              <ul className="rfplanning-des-container">
              <ul>RF Cell Planning </ul>
              <ul>Initial dimensioning of the radio network.</ul>
              <ul>CW Propagation model tuning .</ul>
              <ul>Candidate identification & nominal planning.</ul>
              <ul>Technical site surveys » Frequency Planning .</ul>
              <ul>Static frequency allocation.</ul>
              <ul>Frequency hopping (RF hopping or Baseband hopping).</ul>
              <ul>Frequency and neighbors planning.</ul>
              <ul>Hierarchical Cell structure.</ul>
              <ul>Capacity Planning.</ul>
              <ul>Coverage and capacity planning and analysis.</ul>
              <ul>Addition of new cell sites.</ul>
              <ul>Upgrade of existing cell sites.</ul>
              <ul>Signaling/SDCCH dimensioning.</ul>
              <ul>Additional spectrum use.</ul>
              <ul>Traffic Management.</ul>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default rfplanning;
