import React from 'react';
import './python.css';
import mac1 from '../../../assets/jupyter1mac.jpg';
import mac2 from '../../../assets/jupyter2mac.jpg';
import mac3 from '../../../assets/jupyter3mac.jpg';
import mac4 from '../../../assets/jupyter4mac.jpg';

const jupyter = () => {
  return (
    <div className='main'>
      <div className="pyhtonmac">
        <img src={mac1} alt="pyhton install guide 1" />
        <h1>1. Open cmd on your computer and check PIP Version using the command
        <br /> "pip3 --version"</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac2} alt="pyhton install guide 2" />
        <h1>2. Upgrade pip by running the following command line
        <br />
        "python -m pip install -U pip setuptools"</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac3} alt="pyhton install guide 3" />
        <h1>3. Run command "pip3 install jupyter"</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac4} alt="pyhton install guide 4" />
        <h1>Great! So you are all set to run and start using Jupyter Notebook.</h1>
      </div>
    </div>
  )
}

export default jupyter