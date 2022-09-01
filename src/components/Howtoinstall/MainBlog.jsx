import React from 'react';
import './mainblog.css';
import Mac from '../../assets/installpythonmac.jpg';
import Windows from '../../assets/installpythonwin.jpg';

const Automation = () => {
  return (
    <div>
<div className="macblog_description-banner" id="blog/Automation">
        <div className="macblog_data">
          <div className="macblog-position-relative">
            <img className="macblog_image" src={Mac} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Python, JINJA, Jupyter Notebook & VS Code</h1></p></caption>
              </div>
          </div>
          <div className="macblog_description_data">
            <h3 className="macblog_description_data_heading">Select One of the Following if you're a Mac User:</h3>
            <div className='macblog_description-div' >
              <ul className="macblog-des-container">
              <a href='/howtoinstall/mac/pyhthon-jinja'><ul> How to Install Python & JINJA.</ul></a>
              <a href='/howtoinstall/mac/jupyer-notebook'><ul> How to Install Jupyter Notebook.</ul></a>
              <a href='/howtoinstall/mac/visual-studio-code'><ul> How to Install Visual Studio Code.</ul></a>
              <a href='/howtoinstall/mac/run-first-code'><ul> Running Your First Code.</ul></a>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <div className="windowsblog_description-banner" id="blog/Automation">
        <div className="windowsblog_data">
          <div className="windowsblog-position-relative">
            <img className="windowsblog_image" src={Windows} alt="Network Descriptiom" />
              <div>
                <caption><p><h1 className="text">Python, JINJA, Jupyter Notebook & VS Code</h1></p></caption>
              </div>
          </div>
          <div className="windowsblog_description_data">
            <h3 className="windowsblog_description_data_heading">Select One of the Following if you're a Windows User::</h3>
            <div className='windowsblog_description-div' >
              <ul className="windowsblog-des-container">
              <a href='/howtoinstall/windows/pyhthon-jinja'><ul> How to Install Python & JINJA.</ul></a>
              <a href='/howtoinstall/windows/jupyer-notebook'><ul> How to Install Jupyter Notebook.</ul></a>
              <a href='/howtoinstall/windows/visual-studio-code'><ul> How to Install Visual Studio Code.</ul></a>
              <a href='/howtoinstall/windows/run-first-code'><ul> Running Your First Code.</ul></a>
              </ul>
            </div>
          </div>
        </div>
    </div>
    </div>

  )
}

export default Automation;
