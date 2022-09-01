import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Blog, Aboutus, Features, Whatptech, Header, Video } from './containers';
import { Navbar, Contact, Ourpolicy, Environmentpolicy, Howtoinstall, PythonMac, PythonWin, JupyterMac, JupyterWin, VsMac, VsWin, RunMacFirst, RunWinFirst, Automation, Brand, DataCentre, Network, NetworkOperations, ProductOffer, ResourceManage, RfOptimisation, RfPlanning, SolutionOffer, TransmissionPlan} from './components';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const App = () => {

  return(
  <div className="App">
      <Router>
      <Navbar />
      <ScrollToTop smooth />
      <Routes>
        <Route  path="/" element={<><Video/><Header /><Blog /><Brand/></>} />
        <Route path="/home" element={<><Video/><Header /><Blog /><Brand/></>} />
        <Route  path="/wptech" element={<><Whatptech /></>} />
        <Route  path="/Features" element={<><Features /></>} />
        {/* <Route  path="/brand" element={<><Partners /></>} /> */}
        <Route  path="/aboutus" element={<><Aboutus /></>} />
        <Route  path="/blog" element={<><Blog /></>} />
        <Route  path="/howtoinstall" element={<><Howtoinstall /></>} />
        <Route  path="/contact" element={<><Contact /></>} />

        {/* services extended blogs */}
        <Route  path="/blog/network" element={<><Network /></>} />
        <Route  path="/blog/rfplanning" element={<><RfPlanning /></>} />
        <Route  path="/blog/automation" element={<><Automation /></>} />
        <Route  path="/blog/DataCentre" element={<><DataCentre /></>} />
        <Route  path="/blog/networkoperation" element={<><NetworkOperations /></>} />
        <Route  path="/blog/productOffer" element={<><ProductOffer /></>} />
        <Route  path="/blog/resourceManage" element={<><ResourceManage /></>} />
        <Route  path="/blog/rfOptimization" element={<><RfOptimisation /></>} />
        <Route  path="/blog/solutionOffer" element={<><SolutionOffer /></>} />
        <Route  path="/blog/transmissonPlan" element={<><TransmissionPlan /></>} />

        {/* footer plan */}
        <Route  path="/ourpolicy" element={<><Ourpolicy /></>} />
        <Route  path="/environmentpolicy" element={<><Environmentpolicy /></>} />
        
        {/* how to install */}
        {/* <Route  path="/howtoinstall/windows" element={<><Windows /></>} /> */}
        <Route  path="/howtoinstall/mac/pyhthon-jinja" element={<><PythonMac /></>} />
        <Route  path="/howtoinstall/mac/jupyer-notebook" element={<><JupyterMac /></>} />
        <Route  path="/howtoinstall/mac/visual-studio-code" element={<><VsMac /></>} />
        <Route  path="/howtoinstall/mac/run-first-code" element={<><RunMacFirst /></>} />
        <Route  path="/howtoinstall/windows/pyhthon-jinja" element={<><PythonWin /></>} />
        <Route  path="/howtoinstall/windows/jupyer-notebook" element={<><JupyterWin /></>} />
        <Route  path="/howtoinstall/windows/visual-studio-code" element={<><VsWin /></>} />
        <Route  path="/howtoinstall/windows/run-first-code" element={<><RunWinFirst /></>} />

      
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  </div>
)
  };

export default App;
