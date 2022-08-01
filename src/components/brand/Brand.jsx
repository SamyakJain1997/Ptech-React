import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { crousel1, crousel10, crousel2, crousel3, crousel4, crousel5, crousel6, crousel7, crousel8, crousel9 } from './imports';
import './brand.css';

function Brand() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel5}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel6}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel7}
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel8}
          alt="Seventh slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel9}
          alt="Eighth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded mx-auto d-block img-fluid"
          src={crousel10}
          alt="Ninth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Brand;
