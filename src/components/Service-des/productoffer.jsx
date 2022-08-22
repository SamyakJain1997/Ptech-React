import React from 'react';
import './service-des.css';
import Productoff from '../../assets/blog10.png';

const ProductOffer = () => {
  return (
   <div className="service_description_banner" id="blog/ProductOffer">
      <h1 className="gradient__text">Network Design & Implementation</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Productoff} alt="Network Descriptiom" />
        </div>
      <div className="product_offering">
        <div className="service_description">
          <h3>1. Routing & Switching:</h3>
          <ul>
            <li>Edge Router.</li>
            <li>Core Router.</li>
            <li>Core/Aggregation Switch.</li>
            <li>Access Switch.</li>
          </ul>
        </div>
        <div className="service_description">
          <h3>2. Wireless:</h3>
          <ul>
            <li>WAP.</li>
            <li>Wireless Controller.</li>
            <li>NAC.</li>
          </ul>
        </div>
        <div className="service_description">
          <h3>3. APM/NPM:</h3>
          <ul>
            <li>Server Load Balancer.</li>
            <li>Link Load Balancer.</li>
            <li>WAN Optimization.</li>
            <li>Network Performance Visibility.</li>
          </ul>
        </div>
        <div className="service_description">
          <h3>4. End Point Security:</h3>
          <ul>
            <li>Anti Malware.</li>
            <li>End Point DLP.</li>
            <li>End Point Encryption.</li>
          </ul>
        </div>
        <div className="service_description">
          <h3>5. Security Analytics:</h3>
          <ul>
            <li>Firewall Analyzer.</li>
            <li>VA/PT Software.</li>
            <li>SIEM Appliance / SW.</li>
          </ul>
        </div>
        <div className="service_description">
          <h3>5. Network Automation:</h3>
          <ul>
            <li>Network Backup and Audit Platform.</li>
            <li>Network Route Analyzer.</li>
            <li>Device Upgradation Automated Platform.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductOffer;
