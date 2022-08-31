import React from 'react';
import './productoffer.css';
import Productoff from '../../../assets/blog10.png';

const ProductOffer = () => {
  return (
<div className="productoffer_description-banner" id="blog/ProductOffer">
<div className="productoffer_data">
  <div className="position-relative">
    <img className="productoffer_image" src={Productoff} alt="Network Descriptiom" />
      <div>
        <caption><p><h1 className="text">Product Offerings</h1></p></caption>
      </div>
  </div>
  <div className="productoffer_description_data">
    <p>At PTech, we provide unified and futuristic data center innovative solutions ranging from Converged DC  
  to Software Defined Network for DC and Network Function Virtuaulzation. Our productoffers also include Platform 
  tech refresh and DC Network Migration.</p>
    <h3 className="productoffer_description_data_heading">As part of the Product Offerings We offer the customers following Routing & Switching, Wireless, APM/NPM, End Point Security, Security Analytics & Network Automation:</h3>
    <div className='productoffer_description-div' >
      <ul className="productoffer-des-container">
            <ul>Edge Router.</ul>
            <ul>Core Router.</ul>
            <ul>Core/Aggregation Switch.</ul>
            <ul>Access Switch.</ul>
            <ul>WAP.</ul>
            <ul>Wireless Controller.</ul>
            <ul>NAC.</ul>
            <ul>Server Load Balancer.</ul>
            <ul>Link Load Balancer.</ul>
            <ul>WAN Optimization.</ul>
            <ul>Network Performance Visibility.</ul>
            <ul>Anti Malware.</ul>
            <ul>End Point DLP.</ul>
            <ul>End Point Encryption.</ul>
            <ul>Firewall Analyzer.</ul>
            <ul>VA/PT Software.</ul>
            <ul>SIEM Appliance / SW.</ul>
            <ul>Network Backup and Audit Platform.</ul>
            <ul>Network Route Analyzer.</ul>
            <ul>Device Upgradation Automated Platform.</ul>
      </ul>
    </div>
  </div>
</div>
</div>
  )
}

export default ProductOffer;
