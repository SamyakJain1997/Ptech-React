import React from 'react';
import mac1 from '../../../assets/vsmac1.jpg';
import mac2 from '../../../assets/vsmac2.jpg';
import mac3 from '../../../assets/vsmac3.jpg';
import mac4 from '../../../assets/vsmac4.jpg';
import mac5 from '../../../assets/vsmac5.jpg';


const vsmac = () => {
  return (
<div className='main'>
    <div className="pyhtonmac">
      <img src={mac1} alt="pyhton install guide 1" />
      <h1>1. First, you need to download Visual Studio Code for macOS from its official website at VS Code Official website.</h1>
    </div>
    <div className="pyhtonmac">
      <img src={mac2} alt="pyhton install guide 2" />
      <h1>2. Double-click the downloaded file to extract the archived contents.</h1>
    </div>
    <div className="pyhtonmac">
      <img src={mac3} alt="pyhton install guide 3" />
      <h1>3. Move the Visual Studio Code application to the Application folder to make it available in the macOS launchpad.</h1>
    </div>
    <div className="pyhtonmac">
      <img src={mac4} alt="pyhton install guide 4" />
      <h1>4. Launch Visual Studio Code, and then open a folder where your Python scripts exist (or create a new one). For example, create a new folder on your Desktop, and name it py_scripts, then try to open the folder on VS Code. Usually, VS Code needs your permission to access files in your Desktop folder; click OK.</h1>
    </div>
    <div className="pyhtonmac">
      <img src={mac5} alt="pyhton install guide 4" />
      <h1>Also, you may need to declare that you trust the authors of the files stored in your Desktop folder.</h1>
    </div>
</div>
  )
}

export default vsmac
