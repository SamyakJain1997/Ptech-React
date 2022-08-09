import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { crousel1, crousel10, crousel2, crousel3, crousel4, crousel5, crousel6, crousel7, crousel8, crousel9 } from './imports';
import './brand.css';


export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    var settings1 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    var settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
      <div className="brand">
        <h1 className="gradient__text">Our Partners</h1>
        <Slider {...settings}>
          <div>
            <img src={crousel1} alt="slide" />
          </div>
          <div>
            <img src={crousel2} alt="slide" />
          </div>
          <div>
            <img src={crousel3} alt="slide" />
          </div>
          <div>
            <img src={crousel4} alt="slide" />
          </div>
          <div>
            <img src={crousel5} alt="slide" />
          </div>
          <div>
            <img src={crousel6} alt="slide" />
          </div>
          <div>
            <img src={crousel7} alt="slide" />
          </div>
          <div>
            <img src={crousel8} alt="slide" />
          </div>
          <div>
            <img src={crousel9} alt="slide" />
          </div>
          <div>
            <img src={crousel10} alt="slide" />
          </div>
        </Slider>
      </div>
      <div className="brand1">
      <h1 className="gradient__text">Our Partners</h1>
      <Slider {...settings1}>
        <div>
          <img src={crousel1} alt="slide" />
        </div>
        <div>
          <img src={crousel2} alt="slide" />
        </div>
        <div>
          <img src={crousel3} alt="slide" />
        </div>
        <div>
          <img src={crousel4} alt="slide" />
        </div>
        <div>
          <img src={crousel5} alt="slide" />
        </div>
        <div>
          <img src={crousel6} alt="slide" />
        </div>
        <div>
          <img src={crousel7} alt="slide" />
        </div>
        <div>
          <img src={crousel8} alt="slide" />
        </div>
        <div>
          <img src={crousel9} alt="slide" />
        </div>
        <div>
          <img src={crousel10} alt="slide" />
        </div>
      </Slider>
    </div>
    <div className="brand2">
      <h1>Our Partners</h1>
      <Slider {...settings2}>
        <div>
          <img src={crousel1} alt="slide" />
        </div>
        <div>
          <img src={crousel2} alt="slide" />
        </div>
        <div>
          <img src={crousel3} alt="slide" />
        </div>
        <div>
          <img src={crousel4} alt="slide" />
        </div>
        <div>
          <img src={crousel5} alt="slide" />
        </div>
        <div>
          <img src={crousel6} alt="slide" />
        </div>
        <div>
          <img src={crousel7} alt="slide" />
        </div>
        <div>
          <img src={crousel8} alt="slide" />
        </div>
        <div>
          <img src={crousel9} alt="slide" />
        </div>
        <div>
          <img src={crousel10} alt="slide" />
        </div>
      </Slider>
    </div>
    </div>
    );
  }
}