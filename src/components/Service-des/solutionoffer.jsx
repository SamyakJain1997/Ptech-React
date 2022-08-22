import React from 'react';
import './service-des.css';
import Solution from '../../assets/blog09.png';

const SolutionOffer = () => {
  return (
 <div className="service_description_banner" id="blog/SolutionOffer">
      <h1 className="gradient__text">Solution Offerings</h1>
      <div className="data">
        <div className="image">
          <img className="service_image" src={Solution} alt="Network Descriptiom" />
        </div>
      <div className="service_description">
        <p>We help to design high throughput network which provides unified and agile network for voice, video and data. Provisioning a centralized management to control heterogeneous network along with creating a backbone of intelligent and structured cabling is our objective.</p>
        <h3>LAN & WAN Solutions:</h3>
        <ul>
          <li>Unified 2 tier campus LAN.</li>
          <li>Secured Wireless and BYOD.</li>
          <li>Dynamic Multipoint VPN.</li>
          <li>Software Defined WAN.</li>
        </ul>
      </div>
      <div className="service_description">
        <p>At PTech, We have highly specialized security framework, designed to protect an organization at various layers like Gateways, LAN, Endpoints, Applications and Databases. we lead the market in providing integrated next gen security like protection from APT and DDoS.</p>
        <h3>Network Security :</h3>
        <ul>
          <li>Next Gen Perimeter Security.</li>
          <li>DDoS Solution.</li>
          <li>DLP Solution.</li>
          <li>APT Solution.</li>
          <li>Security Analytics Solution.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default SolutionOffer;
