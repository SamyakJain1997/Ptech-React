import React from 'react';
import './resourcemanage.css';
import Resource from '../../../assets/blog06.png';

const ResourceManage = () => {
  return (
   <div className="resourcemanage_description-banner" id="blog/network">
        <div className="resourcemanage_data">
          <div className="resourcemanage-position-relative">
            <img className="resourcemanage_image" src={Resource} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Data Center Design & Solutions</h1></p></caption>
              </div>
          </div>
          <div className="resourcemanage_description_data">
            <p>Having the best talent is a competitive advantage in today’s demanding and 
          complex world  The success of any business relies upon talent; acquiring 
          the most qualified people is increasingly competitive. PTECH provides placement 
          and deployment of resource as a service. We have a databank of qualified experts 
          and professionals .Our HR team excels in recruitment and training,which results 
          in retention of skilled resources.</p>
            <h3 className="resourcemanage_description_data_heading">We provide Quality Resources as::</h3>
            <div className='resourcemanage_description-div' >
              <ul className="resourcemanage-des-container">
                <ul>RF Planner.</ul>
                <ul>RF Optimization Engineer.</ul> 
                <ul>Transmission Planner.</ul> 
                <ul>Drive Testers.</ul> 
                <ul>Data Analysts.</ul> 
                <ul>RF & LOS Survey Engineer.</ul> 
                <ul>EMF Survey Engineer.</ul> 
                <ul>Resident Engineers/Solution Architect.</ul> 
                <ul>OSS/BSS Engineer .</ul>
                <ul>O&M Engineer (ISP/OSP).</ul>
                <ul>NOC Engineer.</ul>
                <ul>IBS Planner.</ul> 
                <ul>Project Managers.</ul>
                <ul>Automation Developers.</ul> 
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ResourceManage;
