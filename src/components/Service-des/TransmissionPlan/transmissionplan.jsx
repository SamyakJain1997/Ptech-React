import React from 'react';
import './transmissionplan.css';
// import Transmission from '../../../assets/blog05.jpeg';

const TransmissonPlan = () => {
  return (
      <div className="transmission_description-banner" id="blog/TransmissonPlan">
        <div className="transmission_data">
          <div className="transmission-position-relative">
            <img className="transmission_image" src="https://ptechindia.in/pics/blog05.jpeg" alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Transmission Planning Services</h1></p></caption>
              </div>
          </div>
          <div className="transmission_description_data">
            <p>Transmission network planning covers definition of the whole network 
          topology, technology selections, equipment configurations, synchronization 
          and management plans. Essential areas of expertise are also site candidate 
          identification and selection, technical site surveys and line-of-sight 
          checks is a more constant way of maintaining good quality in the network, 
          especially when the mobile networks are changing rapidly and more and more 
          customers are being served.</p>
            <h3 className="transmission_description_data_heading">As part of the Transmission Planning Services, We offer the customers following services:</h3>
            <div className='transmission_description-div' >
              <ul className="transmission-des-container">
              <ul>Initial dimensioning of the transmission network.</ul>
              <ul>Transmission media selections: microwave (PDH), SDH, optic, copper, leased line, Satellite Existing network evaluation/ expansion.</ul>
              <ul>Technical site surveys.</ul>
              <ul>Line-of-sight surveys.</ul>
              <ul>Capacity and topology planning.</ul>
              <ul>Synchronisation planning.</ul>
              <ul>Network management planning.</ul>
              <ul>Routing with time slot allocation.</ul>
              <ul>MW link level planning and interference analysis.</ul>
              <ul>BSC/RAN area boundaries definition.</ul>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TransmissonPlan;
