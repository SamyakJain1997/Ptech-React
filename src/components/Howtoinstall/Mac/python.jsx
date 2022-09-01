import React from 'react';
import './python.css';
import mac1 from '../../../assets/pythonmac1.jpg';
import mac2 from '../../../assets/pythonmac2.jpg';
import mac3 from '../../../assets/pythonmac3.jpg';
import mac4 from '../../../assets/pythonmac4.jpg';
import mac5 from '../../../assets/pythonmac5.jpg';
import mac6 from '../../../assets/pythonmac6.jpg';
import mac7 from '../../../assets/pythonmac7.jpg';


const python = () => {
  return (
    <div className='main'>
      <div className="pyhtonmac">
        <img src={mac1} alt="pyhton install guide 1" />
        <h1>1. First, download an installer package from the Python website. To do that, visit <a href='https://www.python.org/downloads/'>Python</a> on your Mac; it detects your operating system automatically and shows a big button for downloading the latest version of Python installer on your Mac. If it doesn’t, click the macOS link and choose the latest Python release.</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac2} alt="pyhton install guide 2" />
        <h1>2. Once the download is complete, double-click the package to start installing Python. The installer will walk you through a wizard to complete the installation, and in most cases, the default settings work well, so install it like the other applications on macOS. You may also have to enter your Mac password to let it know that you agree with installing Python.NOTE If you’re using Apple M1 Mac, you need to install Rosetta. Rosetta enables Intel-based features to run on Apple silicon Macs.</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac3} alt="pyhton install guide 3" />
        <h1>3. When the installation completes, it will open up the Python folder.</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac4} alt="pyhton install guide 4" />
        <h1>4. Let’s verify that the latest version of Python and IDLE installed correctly. To do that, double-click IDLE, which is the integrated development environment shipped with Python. If everything works correctly, IDLE shows the Python shell as follows:</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac5} alt="pyhton install guide 5" />
        <h1>5. Let’s write a simple Python code and run it in IDLE. Type the following statement, and hit the return key</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac6} alt="pyhton install guide 6" />
        <h1>Or let’s do a basic calculation in Python as follows:<br />NOTE The exciting advantage of this installation method is that you can easily update an outdated Python install by downloading the latest Python installer. The new version of Python is available on your Mac once the installation is complete.</h1>
      </div>
      <div className="pyhtonmac">
        <img src={mac7} alt="pyhton install guide 7" />
        <ul>
            <ul>Open your macOS terminal.</ul>
            <ul>Type "pip install jinja2" without quotes and hit "Enter".</ul>
            <ul>If it doesn't work,try "pip3 install jinja2" or "python -m pip install"</ul>
            <ul>Wait for the installation to terminate successfully.</ul>
        </ul>
      </div>
    </div>
  )
}

export default python
