import React, { useRef } from 'react';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './contact.css';
import { BsFillMapFill, BsFillTelephoneForwardFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';


// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    toast.info('Thank you! Message Sent', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    e.preventDefault();

    emailjs
      .sendForm(
        'service_gdm9i0n',
        'template_e0cu50f',
        form.current,
        'sJ5CizeTlMACWnVEg',
      )
      .then(
        (result) => {
          // eslint-disable-next-line
          console.log(result.text);
          // eslint-disable-next-line
          console.log('message sent');
        },
        (error) => {
          // eslint-disable-next-line
          console.log(error.text);
        },
      );
  };

  return (
    // <StyledContactForm>
    //   <form ref={form} onSubmit={sendEmail} id="contact">
    //     <label htmlFor="btn-check5" className="btn">Name
    //       <input className="input" type="text" name="user_name" />
    //     </label>
    //     <label htmlFor="btn-check5" className="btn">Email
    //       <input className="textarea" type="email" name="user_email" />
    //     </label>
    //     <label htmlFor="btn-check5" className="btn">Message
    //       <textarea className="textarea" name="message" />
    //     </label>
    //     <input className="submit" type="submit" value="Send" />
    //   </form>
    // </StyledContactForm>
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>LEADING PROVIDER OF TELECOM SERVICES & SOLUTIONS FOR WIRELESS NETWORKS WITH IN-HOUSE NETWORK ANALYTICS SOFTWARE & GLOBAL PRESENCE STRONG MULTI-VENDOR & MULTI-TECHNOLOGIES EXPERIENCE IN NETWORK PLANNING, OPTIMIZATION & END TO END NETWORK MANAGED SERVICES</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
            <BsFillMapFill size={27} />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Corporate and Registered office.<br /> PADHI TECHNOLOGIES PVT.LTD., N/3-458,IRC VILLAGE,<br />NAYAPALLI, BHUBANESWAR,KHORDHA PIN-751015</p>
               
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <AiTwotoneMail size={27}/>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>info@ptechindia.com</p>
               
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <BsFillTelephoneForwardFill size={27} />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91 8763425986</p>
               
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="user_name" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="user_email" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea type="text" name="message" required />
              <span>Type Your Message...</span>
              <div className="inputBox">
              <input type="submit" name="" value="Send"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;