import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// import './contact.css';
import styled from 'styled-components';

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
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail} id="contact">
        <label htmlFor="btn-check5" className="btn">Name
          <input className="input" type="text" name="user_name" />
        </label>
        <label htmlFor="btn-check5" className="btn">Email
          <input className="textarea" type="email" name="user_email" />
        </label>
        <label htmlFor="btn-check5" className="btn">Message
          <textarea className="textarea" name="message" />
        </label>
        <input className="submit" type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`

  form {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 30%;
    flex-direction: column;
    width: 40%;
    font-size: 16px;
    background: #8cb5df;
    
  input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

  textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

  label {
      margin-top: 1rem;
      float: inline-start;
    }

  input[type="submit"] {
      max-height: 70px;
      min-height: 70px;
      margin-top: 2rem;
      cursor: pointer;
      background: #8cb5df;
      color: #5078e3;
      font-size: 30px;
      font-weight: 500;
      border: 80px;
    }

  input[type="submit"]:hover{
      color: black;
    }
  }
  
`;
