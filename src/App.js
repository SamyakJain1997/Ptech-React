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
        <Route  path="/guide" element={<><Howtoinstall /></>} />
        <Route  path="/contact" element={<><Contact /></>} />

        {/* services extended blogs */}
        <Route  path="/services/network" element={<><Network /></>} />
        <Route  path="/services/rfplanning" element={<><RfPlanning /></>} />
        <Route  path="/services/automation" element={<><Automation /></>} />
        <Route  path="/services/DataCenter" element={<><DataCentre /></>} />
        <Route  path="/services/DataCentre" element={<><DataCentre /></>} />
        <Route  path="/services/networkoperation" element={<><NetworkOperations /></>} />
        <Route  path="/services/productOffer" element={<><ProductOffer /></>} />
        <Route  path="/services/resourceManage" element={<><ResourceManage /></>} />
        <Route  path="/services/rfOptimization" element={<><RfOptimisation /></>} />
        <Route  path="/services/solutionOffer" element={<><SolutionOffer /></>} />
        <Route  path="/services/transmissonPlan" element={<><TransmissionPlan /></>} />

        {/* footer plan */}
        <Route  path="/ourpolicy" element={<><Ourpolicy /></>} />
        <Route  path="/environmentpolicy" element={<><Environmentpolicy /></>} />
        
        {/* how to install */}
        {/* <Route  path="/howtoinstall/windows" element={<><Windows /></>} /> */}
        <Route  path="/blog/mac/pyhthon-jinja" element={<><PythonMac /></>} />
        <Route  path="/blog/mac/jupyer-notebook" element={<><JupyterMac /></>} />
        <Route  path="/blog/mac/visual-studio-code" element={<><VsMac /></>} />
        <Route  path="/blog/mac/run-first-code" element={<><RunMacFirst /></>} />
        <Route  path="/blog/windows/pyhthon-jinja" element={<><PythonWin /></>} />
        <Route  path="/blog/windows/jupyer-notebook" element={<><JupyterWin /></>} />
        <Route  path="/blog/windows/visual-studio-code" element={<><VsWin /></>} />
        <Route  path="/blog/windows/run-first-code" element={<><RunWinFirst /></>} />

      
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  </div>
)
  };

export default App;
