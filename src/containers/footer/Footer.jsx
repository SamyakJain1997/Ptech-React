import React from 'react';
import { useNavigate } from 'react-router-dom';
import ptechLogo from '../../ptech-black.png';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="ptech__footer section__padding">
      {/* <div className="ptech__footer-heading" onClick={() => navigate('/contact')}>
        <h1 className="footer__heading">Click here to step in to the future before others!!!</h1>
      </div> */}

      {/* <div className="ptech__footer-btn" onClick={() => navigate('/contact')}>
        <p>Contact Us</p>
      </div> */}

      <div className="ptech__footer-links">
        <div className="ptech__footer-links_logo">
          <img src={ptechLogo} alt="ptech_logo" />
          <p>PTECH Pvt. Ltd (Padhi Technologies Pvt Ltd) is a well-established sub vendor company in telecom sector, We are a leading Network Planning and Optimization Company.</p>
        </div>
        <div className="ptech__footer-links_div">
          <h4>Social Media</h4><br />
          <p className="social-meida-text"><a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />Twitter</a></p>
          <p className="social-meida-text"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />Facebook</a></p>
          <p className="social-meida-text"><a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />Instagram</a></p>
          <p className="social-meida-text"><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />Linkedin</a></p>
        </div>
        <div className="ptech__footer-links_div">
          <h4>Our Policy</h4><br />
          <p onClick={() => navigate('/ourpolicy')}>Quality Policy</p>
          <p onClick={() => navigate('/environmentpolicy')}>Environment Policy</p>
          {/* <p>Contact</p> */}
        </div>
        <div className="ptech__footer-links_div">
          <h4 className="ptech__footer-btn" onClick={() => navigate('/contact')}>Get in touch</h4>
          <p className="contact-address">Corporate and Registered office. PADHI TECHNOLOGIES PVT.LTD., N/3-458,IRC VILLAGE,NAYAPALLI, BHUBANESWAR,KHORDHA PIN-751015</p>
          <p>+91 8763425986</p>
          <p>info@ptechindia.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
