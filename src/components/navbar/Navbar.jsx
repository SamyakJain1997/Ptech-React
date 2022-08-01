import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../ptech-logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ptech__navbar">
      {/* <div className="banner">WE CONNECT AND DELIVER.</div> */}
      <div className="ptech__navbar-links">
        <div className="ptech__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="ptech__navbar-links_container">
          <p><a href="/home">Home</a></p>
          <p><a href="/wptech">Why Choose Us?</a></p>
          <p><a href="/Aboutus">About us</a></p>
          <p><a href="/features">Work Commitment</a></p>
          <p><a href="/blog">Services</a></p>
          <p><a href="/brand">partners</a></p>
          <p><a href="/contact">Contact Us</a></p>

        </div>
      </div>
      <div className="ptech__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#162a5c" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#162a5c" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ptech__navbar-menu_container scale-up-center">
          <div className="ptech__navbar-menu_container-links">
            <p><a href="/home">Home</a></p>
            <p><a href="/wptech">Why Choose Us?</a></p>
            <p><a href="/Aboutus">About us</a></p>
            <p><a href="/features">Work Commitment</a></p>
            <p><a href="/blog">Services</a></p>
            <p><a href="/brand">partners</a></p>
            <p><a href="/contact">Contact Us</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
