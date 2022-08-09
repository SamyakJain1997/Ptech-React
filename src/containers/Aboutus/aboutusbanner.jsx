import React from 'react';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
// import './aboutusbanner.css';

const Aboutusbanner = () => {
  return (
    <div className="body">
      <div className="ptech__header-image">
    <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement src={banner3} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner4} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner2} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner1} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={banner1} alt="..." />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
    </div>
  )
}

export default Aboutusbanner;
