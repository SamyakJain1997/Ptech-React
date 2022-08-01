import React from 'react';
import './header.css';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';
import banner5 from '../../assets/banner5.jpg';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';


const Header = () => (
  <div className="ptech__header section__padding" id="home">
    <div className="ptech__header-content">
      <h1 className="gradient__text">Welcome to PTECH Pvt. Ltd</h1>
      <div className="ptech__header-image">
    <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement src={banner1} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner2} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner3} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner4} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner5} alt="..." />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
      <p>PTECH Pvt. Ltd (Padhi Technologies Pvt Ltd) is a well-established sub vendor company in telecom sector, having presence across East India, with strong competencies, possessing niche skills of completing the time constraint works without compromising the quality,authenticity and ethics of the project.</p>
      <p>The company has created a name for itself as a reliable partner for delivering and implementing solutions by providing RF services, EMF and Broadband Surveys, End-to-End consulting, System Integration, and Specialized Manpower supply to the telecom companies.</p>
      <p>We are a leading Network Planning and Optimization Company, providing skilled services and Turnkey solutions across the entire spectrum of network planning, optimization services, BTS installations and operations support for fixed and Wireless operations, RF services & in building solutions to Wireless providers.</p>
      <p>PTECH’s business model reflects our spirit of flexibility in the Telecom solutions domain and allows our clients to choose the model that best suits their requirements.</p>
    </div>
    
  </div>
);

export default Header;
