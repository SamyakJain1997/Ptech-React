import React from 'react';
import './service-des.css';
import Transmission from '../../assets/blog05.png';

const TransmissonPlan = () => {
  return (
      <div className="service_description_banner" id="blog/TransmissonPlan">
      <h1 className="gradient__text">Transmission Planning Services</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Transmission} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>Transmission network planning covers definition of the whole network 
          topology, technology selections, equipment configurations, synchronization 
          and management plans. Essential areas of expertise are also site candidate 
          identification and selection, technical site surveys and line-of-sight 
          checks is a more constant way of maintaining good quality in the network, 
          especially when the mobile networks are changing rapidly and more and more 
          customers are being served.</p>
        <h3>As part of the Transmission Planning Services, We offer the customers following services:</h3>
        <ul>
          <li>Initial dimensioning of the transmission network.</li>
          <li>Transmission media selections: microwave (PDH), SDH, optic, copper, leased line, Satellite Existing network evaluation/ expansion.</li>
          <li>Technical site surveys.</li>
          <li>Line-of-sight surveys.</li>
          <li>Capacity and topology planning.</li>
          <li>Synchronisation planning.</li>
          <li>Network management planning.</li>
          <li>Routing with time slot allocation.</li> 
          <li>MW link level planning and interference analysis.</li>
          <li>BSC/RAN area boundaries definition.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default TransmissonPlan;
