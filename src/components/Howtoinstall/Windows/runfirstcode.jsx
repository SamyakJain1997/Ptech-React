import React from 'react';
import mac1 from '../../../assets/runmac1.jpg';
import mac2 from '../../../assets/runmac2.jpg';
import mac3 from '../../../assets/runmac3.jpg';
import mac4 from '../../../assets/runmac4.jpg';
import mac5 from '../../../assets/runmac5.jpg';

const runfirstcode = () => {
  return (
    <div className='main'>
    <div className="pythonwin">
      <img src={mac1} alt="pyhton install guide 1" />
      <h1>1. Create a new file with a .py extension. For example, create a new file, and name it prog_01.py. VS Code detects the .py extension and wants to install a Python extension.
        <br />
        To work with Python inside VS Code, we need to use the Python extension, which includes many useful features, such as code completion with IntelliSense, debugging, unit testing support, etc.</h1>
    </div>
    <div className="pythonwin">
      <img src={mac2} alt="pyhton install guide 2" />
      <h1>Install it by clicking on the Install button.
        <br />
        We can also install the Python extension by browsing extensions. Click on the Extensions icon on the left side of VS Code.</h1>
    </div>
    <div className="pythonwin">
      <img src={mac3} alt="pyhton install guide 3" />
      <h1>This will show you a list of the most popular VS Code extensions on the VS Code Marketplace. Now, we can select the Python extension and install it.</h1>
    </div>
    <div className="pythonwin">
      <img src={mac4} alt="pyhton install guide 4" />
      <h1>2. Once the extension is installed, you have to select a Python interpreter. Click on the Select Python Interpreter button:</h1>
    </div>
    <div className="pythonwin">
      <img src={mac5} alt="pyhton install guide 4" />
      <h1>Then select the recommended Python interpreter on the list.</h1>
    </div>
</div>
  )
}

export default runfirstcode
