import React, { useState, useEffect, useRef } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsArrowUpRightSquare, BsArrowDownLeftSquare } from 'react-icons/bs';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';
import logo from '../../ptech-logo1.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleServices, setToggleServices] = useState(false);
  const [toggleServicesdes, setToggleServicesdes] = useState(false);
  const [navbar,setNavbar] = useState(false);

const ChangeBackground =() =>{
  if (window.scrollY >= 100){
  setNavbar(true)
} else {
  setNavbar(false);
}
}

window.addEventListener('scroll', ChangeBackground);

let mainRef = useRef();
let menuRef = useRef();

useEffect(() => {
  let handler1 = (event) =>{
    if(!mainRef.current.contains(event.target)){
      setToggleServices(false);
  }
};

  document.addEventListener("mousedown", handler1);

  return () =>{
  document.removeEventListener("mousedown", handler1);
  };
  });

useEffect(() => {
  let handler = (event) =>{
    if(!menuRef.current.contains(event.target)){
      setToggleMenu(false);
  }
};

  document.addEventListener("mousedown", handler);

  return () =>{
  document.removeEventListener("mousedown", handler);
  };
  });

 

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
        <div className="ptech__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
      <div className="ptech__navbar-links">
        <div ref={mainRef} className="ptech__navbar-links_container">
          <p><a href="/home">Home</a></p>
          <p><a href="/aboutus">About us</a></p>
          <p><a href="/wptech">Why Choose Us?</a></p>
          <p><div className="ptech__navbar-service">
        {toggleServices ? <p onClick={() => setToggleServices(false)}>Services<IoCaretUpSharp color="#000" size={18} onClick={() => setToggleServices(false)} /></p> : <p onClick={() => setToggleServices(true)}>Services< IoCaretDownSharp color="#000" size={18} onClick={() => setToggleServices(true)} /></p>}
        {toggleServices && ( <div className="ptech__navbar-service_container">
          <div className="ptech__navbar-service_container-links">
            <p><a href="/blog/network">• Network Design & Implementation</a></p>
            <p><a href="/blog/rfplanning">• RF Planning & Designing</a></p>
            <p><a href="/blog/rfOptimization">• RF Optimization & Drive Test</a></p>
            <p><a href="/blog/networkoperation">• Network Operations Services</a></p>
            <p><a href="/blog/transmissonPlan">• Transmission Planning Services</a></p>
            <p><a href="/blog/resourceManage">• Resource Management</a></p>
            <p><a href="/blog/automation">• Automation Solutions</a></p>
            <p><a href="/blog/dataCenter">• Data Center Design & Solutions</a></p>
            <p><a href="/blog/solutionOffer">• Solution Offerings</a></p>
            <p><a href="/blog/productOffer">• Product Offerings</a></p>
          </div>
        </div>
        )}
      </div></p>
           <p><a href="/features">Work Commitment</a></p>
          {/* <p><a href="/brand">partners</a></p> */}
          <p><a href="/contact">Contact Us</a></p>

        </div>
      </div>
      <div ref={menuRef} className="ptech__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ptech__navbar-menu_container scale-up-center">
          <div className="ptech__navbar-menu_container-links">
            <p><a href="/home">Home</a></p>
            <p><a href="/aboutus">About us</a></p>
            <p><a href="/wptech">Why Choose Us?</a></p>
            <p ><div className="ptech__navbar-service">
        {toggleServicesdes ? <p onClick={() => setToggleServicesdes(false)}>Services<BsArrowUpRightSquare color="#000" size={27} onClick={() => setToggleServicesdes(false)} /></p> : <p onClick={() => setToggleServicesdes(true)}>Services<BsArrowDownLeftSquare color="#000" size={27} onClick={() => setToggleServicesdes(true)} /></p>}
        {toggleServicesdes && ( <div className="ptech__navbar-service_container">
          <div className="ptech__navbar-service_container-links">
            <p><a href="/blog/network">• Network Design & Implementation</a></p>
            <p><a href="/blog/rfplanning">• RF Planning & Designing</a></p>
            <p><a href="/blog/rfOptimization">• RF Optimization & Drive Test</a></p>
            <p><a href="/blog/networkoperation">• Network Operations Services</a></p>
            <p><a href="/blog/transmissonPlan">• Transmission Planning Services</a></p>
            <p><a href="/blog/resourceManage">• Resource Management</a></p>
            <p><a href="/blog/automation">• Automation Solutions</a></p>
            <p><a href="/blog/dataCenter">• Data Center Design & Solutions</a></p>
            <p><a href="/blog/solutionOffer">• Solution Offerings</a></p>
            <p><a href="/blog/productOffer">• Product Offerings</a></p>
          </div>
        </div>
        )}
                </div></p>
            <p><a href="/features">Work Commitment</a></p>
            {/* <p><a href="/brand">partners</a></p> */}
            <p><a href="/contact">Contact Us</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;