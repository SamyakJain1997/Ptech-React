import React from 'react';
import './rfoptimisation.css';
import Rfopt from '../../../assets/blog03.jpeg';

const RfOptimization = () => {
  return (
    <div className="rfoptimisation_description-banner" id="blog/RfOptimization">
        <div className="rfoptimisation_data">
          <div className="rfoptimisation-position-relative">
            <img className="rfoptimisation_image" src={Rfopt} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">RF Optimization & Drive Test</h1></p></caption>
              </div>
          </div>
          <div className="rfoptimisation_description_data">
            <p>High quality of service in mobile networks is the prerequisite for the commercial success.
           Continuous optimization is a process, which focuses on checking the network quality continuously
           and takes actions when needed. It is a more constant way of maintaining good quality in the network,
          especially when the mobile networks are changing rapidly and more and more customers are being served.</p>
            <h3 className="rfoptimisation_description_data_heading">As part of the RF Optimization, We offer the customers following services::</h3>
            <div className='rfoptimisation_description-div' >
              <ul className="rfoptimisation-des-container">
                <ul>Parameter Configuration Check (OMC Audit).</ul>
                <ul>Traffic and throughput analysis.</ul>
                <ul>Parameter planning and optimization.</ul>
                <ul>Dropped call analysis.</ul>
                <ul>Handover success analysis.</ul>
                <ul>Drive Test analysis.</ul>
                <ul>Interference analysis.</ul>
                <ul>Field measurements and acceptance testing.</ul>
                <ul>Frequency & Strategy Planning.</ul>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RfOptimization;
