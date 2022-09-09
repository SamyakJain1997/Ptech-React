import React from 'react';
// import intro from '../../assets/intro.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import './video.css';
import logo from '../../ptech-logo1.png';


const video = () => {
  return (
    <div className="banner">
        <div className="position-relative">
        <a href="/aboutus"><video className="video" src="https://ptechindia.in/pics/intro.mp4" loop autoPlay muted /></a>
            <div>
            <a href="/aboutus">
            <caption><img className="image" src={logo} alt="" /><p><span>DISCOVER PTECH</span><br />LEADING PROVIDER OF TELECOM SERVICES & SOLUTIONS FOR WIRELESS NETWORKS WITH IN-HOUSE NETWORK ANALYTICS SOFTWARE & GLOBAL PRESENCE  STRONG MULTI-VENDOR & MULTI-TECHNOLOGIES EXPERIENCE  IN NETWORK PLANNING, OPTIMIZATION & END TO END NETWORK MANAGED SERVICES.</p></caption>
            </a>
            </div>
        </div>
    </div>
  )
}

export default video;
