import React from 'react';
import './solutionoffer.css';
import Solution from '../../../assets/blog09.png';

const SolutionOffer = () => {
  return (
<div className="solutionoffer_description-banner" id="blog/SolutionOffer">
<div className="solutionoffer_data">
  <div className="solutionoffer-position-relative">
    <img className="solutionoffer_image" src={Solution} alt="Network Descriptiom" />
      <div>
        <caption><p><h1 className="text">Solution Offerings</h1></p></caption>
      </div>
  </div>
  <div className="solutionoffer_description_data">
    <p>We help to design high throughput network which provides unified and agile network for voice, video and data. Provisioning a centralized management to control heterogeneous network along with creating a backbone of intelligent and structured cabling is our objective.
    At PTech, We have highly specialized security framework, designed to protect an organization at various layers like Gateways, LAN, Endpoints, Applications and Databases. we lead the market in providing integrated next gen security like protection from APT and DDoS.</p>
    <h3 className="solutionoffer_description_data_heading">As part of the Solution Offer We offer the customers following LAN & WAN Solutions & Network Security:</h3>
    <div className='solutionoffer_description-div' >
      <ul className="solutionoffer-des-container">
          <ul>Unified 2 tier campus LAN.</ul>
          <ul>Secured Wireless and BYOD.</ul>
          <ul>Dynamic Multipoint VPN.</ul>
          <ul>Software Defined WAN.</ul>
          <ul>Next Gen Perimeter Security.</ul>
          <ul>DDoS Solution.</ul>
          <ul>DLP Solution.</ul>
          <ul>APT Solution.</ul>
          <ul>Security Analytics Solution.</ul>
      </ul>
    </div>
  </div>
</div>
</div>
  )
}

export default SolutionOffer;
