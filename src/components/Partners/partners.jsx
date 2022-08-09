import React from 'react';
import './partners.css';
import vi from '../../assets/partnervi.png';
import nokia from '../../assets/partnernokia.png';
import bsnl from '../../assets/partnerbsnl.png';
import airtel from '../../assets/partnerairtel.png';
import erricson from '../../assets/partnererricson.png';
import tata from '../../assets/partnertata.png';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

function Partners() {
  return (
    <div className="partner_container">
      {/* <img className="partner__img" src={vi} alt="VI" /> */}
      <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement className="partner__img" src={vi} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="partner__img" src={nokia} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="partner__img" src={erricson} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="partner__img" src={airtel} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="partner__img" src={bsnl} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="partner__img" src={tata} alt="..." />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}

export default Partners;
