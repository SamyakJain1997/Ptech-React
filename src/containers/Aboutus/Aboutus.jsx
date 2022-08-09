import React from 'react';
// import possibilityImage from '../../assets/telecom.png';
import './Aboutus.css';
import Aboutusbanner from './aboutusbanner';

const Aboutus = () => (
  <div className="ptech__possibility section__padding" id="Aboutus">
    <div className="ptech__possibility-image">
      <Aboutusbanner />
    </div>
    <div className="ptech__possibility-content">
      <h4>Our Vision and Mission</h4>
      <h1 className="gradient__text">Be the most preferred and trusted telecom consulting company for our clients. <br /> Become a leading network planning and optimizing company.</h1>
      <p>PTech Pvt. Ltd is a growing sub vendor company in the telecom and IT Sector. PTECH haspresence across India and with multi-domain experts. The company has created a name foritself as a reliable partner for delivering and implementing solutions by providing RFServices,System Integration Services, Network Design and Implementation Services,Network/Telco Automation Solutions,EMF and Broadband Surveys, end-to-end consulting andspecialized manpower supply to the telecom/IT companies. We believe in providing bestservices in the industry at optimum prices by innovative Products and Solution offerings andspreading knowledge among team.PTech is the leading Network Planning and Optimization Company. The company providesnetwork planning, optimization services, BTS installations and operations support for fixed andWireless operations, RF services & in building solutions to Wireless providers. Beyond theseservices, it has expanded to cover Turnkey solutions, RF Planning and Optimization, NetworkPerformance Services and IP Planning. It undertakes task based projects requiring delivery oftangible results in the form of either cell site production or network quality improvement andhas consistently met or exceeded Key Performance Indicators (KPI).</p>
      <h4>About Industry</h4>
      <p>The IT/Telco industry has undergone explosive growth and has become global in its scope andambitions. Spectrum has become severely congested. Good network design is no longer a“nicety”, but rather a necessity. Competitiveness in Telecommunications Industry is looking forsimpler, cost effective and innovative strategies. Wireless services and Products are essential requirements.</p>
    </div>
  </div>
);

export default Aboutus;
