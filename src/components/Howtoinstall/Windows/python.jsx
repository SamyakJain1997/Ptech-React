import React from 'react';
import './pythonwin.css';
import mac1 from '../../../assets/pythonwin1.jpg';
import mac2 from '../../../assets/pythonwin2.jpg';
import mac3 from '../../../assets/pythonwin3.jpg';
import mac5 from '../../../assets/pythonwin5.jpg';
import mac6 from '../../../assets/pythonwin6.jpg';
// import mac7 from '../../../assets/pythonwin7.jpg';


const python = () => {
  return (
    <div className='main'>
      <div className="pythonwin">
        <img src={mac1} alt="pyhton install guide 1" />
        <h1>1.The installation procedure involves downloading the official Python .exe installer and running it on your system. The version you need depends on what you want to do in Python. For example, if you are working on a project coded in Python version 2.6, you probably need that version. If you are starting a project from scratch, you have the freedom to choose. If you are learning to code in Python, we recommend you download both the latest version of Python 2 and 3. Working with Python 2 enables you to work on older projects or test new projects for backward compatibility.</h1>
      </div>
      <div className="pythonwin">
        <img src={mac2} alt="pyhton install guide 2" />
        <ul>
        <ul>Step 2: Download Python Executable Installer</ul>
          <ul>Open your web browser and navigate to the Downloads for Windows section of the official Python website.</ul>
          <ul>Search for your desired version of Python. At the time of publishing this article, the latest Python 3 release is version 3.7.3, while the latest Python 2 release is version 2.7.16.</ul>
          <ul>Select a link to download either the Windows x86-64 executable installer or Windows x86 executable installer. The download is approximately 25MB.</ul>
        </ul>
      </div>
      <div className="pythonwin">
        <img src={mac3} alt="pyhton install guide 3" />
        <ul>
        <ul>Step 3: Run Executable Installer</ul>
        <ul>Run the Python Installer once downloaded. (In this example, we have downloaded Python 3.7.3.)</ul>
        <ul>Make sure you select the Install launcher for all users and Add Python 3.7 to PATH checkboxes. The latter places the interpreter in the execution path. For older versions of Python that do not support the Add Python to Path checkbox, see Step6.</ul>
        <ul>Select Install Now – the recommended installation options.</ul>
        <ul>The next dialog will prompt you to select whether to Disable path length limit. Choosing this option will allow Python to bypass the 260-character MAX_PATH limit. Effectively, it will enable Python to use long path names.</ul>
        <ul>The Disable path length limit option will not affect any other system settings. Turning it on will resolve potential name length issues that may arise with Python projects developed in Linux.</ul>
        </ul>
      </div>
      <div className="pythonwin">
        <img src={mac5} alt="pyhton install guide 4" />
        <ul>
        <ul>Step 4: Verify Python Was Installed On Windows</ul>
        <ul>Navigate to the directory in which Python was installed on the system. In our case, it is <br /><h6>C:\Users\Username\AppData\Local\Programs\Python\Python37</h6> since we have installed the latest version.</ul>
        <ul>Double-click python.exe.</ul>
        <ul>The output should be similar to what you can see here.</ul>
        </ul>
        </div>
      <div className="pythonwin">
        <img src={mac5} alt="pyhton install guide 5" />
        <ul>
        <ul>Step 5: Verify Pip Was Installed</ul>
        <ul>Open the Start menu and type "cmd."</ul>
        <ul>Select the Command Prompt application.</ul>
        <ul>Enter pip -V in the console. If Pip was installed successfully, you should see the following output:</ul>
        </ul>
      </div>
      <div className="pythonwin">
        <img src={mac6} alt="pyhton install guide 6" />
        <ul>
        <ul>Installing Jinja 2 Package :</ul>
        <ul>Open the Start menu and type "cmd."</ul>
        <ul>Type "pip install jinja2" without quotes and hit "Enter".</ul>
        <ul>If it doesn't work,try "pip3 install jinja2" or "python -m pip install"</ul>
        <ul>Wait for the installation to terminate successfully.It is now installed on your Windows machine.</ul>
        </ul>
        </div>
      </div>
  )
}

export default python
