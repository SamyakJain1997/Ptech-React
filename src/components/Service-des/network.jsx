import React from 'react';
import './service-des.css';
// import Network from '../../assets/network.jpg';
import blog01 from '../../assets/testimg.png';

const network = () => {
  return (
    <div className="service_description_banner" id="blog/network">
      <h1 className="gradient__text">Network Design & Implementation</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={blog01} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>Operator facing challenges are extensive and unavoidable. New technology, 
          Coverage, Capacity, and Maximizing the Value of Existing Network Resources, 
          are challenging requirements. Network Planning is crucial services for designing
          any network. PTECH helps customer not only in Network design but also in expanding
          rapidly and cost effectively. </p>
        <h3>As part of the network planning We offer the customers following services:</h3>
        <ul>
          <li>Network Design and Dimensioning (IP/MPLS,RF)</li>
          <li>Access Network Planning. </li>
          <li>Transmission and Synchronization plan.</li>
          <li>Switching Network Topology.</li>
          <li>Techno-commercial Bid preparations.</li>
          <li>BOQ Recommendations and Validations</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default network;
