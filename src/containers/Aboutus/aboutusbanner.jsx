import React from 'react';
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
          <MDBCarouselElement src="https://ptechindia.in/pics/banner3.jpg" alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src="https://ptechindia.in/pics/banner4.jpg" alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src="https://ptechindia.in/pics/banner2.jpg" alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src="https://ptechindia.in/pics/banner1.jpg" alt="..." />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
    </div>
  )
}

export default Aboutusbanner;
