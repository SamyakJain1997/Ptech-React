import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Blog, Aboutus, Features, Whatptech, Header, Video } from './containers';
import { Navbar, Network, Rfplanning, Contact, Ourpolicy, Environmentpolicy, Automation, DataCenter, Networkoperation, ProductOffer, ResourceManage, RfOptimization, SolutionOffer, TransmissonPlan,  Brand} from './components';
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
        <Route  path="/contact" element={<><Contact /></>} />

        {/* services extended blogs */}
        <Route  path="/blog/network" element={<><Network /></>} />
        <Route  path="/blog/rfplanning" element={<><Rfplanning /></>} />
        <Route  path="/blog/automation" element={<><Automation /></>} />
        <Route  path="/blog/dataCenter" element={<><DataCenter /></>} />
        <Route  path="/blog/networkoperation" element={<><Networkoperation /></>} />
        <Route  path="/blog/productOffer" element={<><ProductOffer /></>} />
        <Route  path="/blog/resourceManage" element={<><ResourceManage /></>} />
        <Route  path="/blog/rfOptimization" element={<><RfOptimization /></>} />
        <Route  path="/blog/solutionOffer" element={<><SolutionOffer /></>} />
        <Route  path="/blog/transmissonPlan" element={<><TransmissonPlan /></>} />

        {/* footer plan */}
        <Route  path="/ourpolicy" element={<><Ourpolicy /></>} />
        <Route  path="/environmentpolicy" element={<><Environmentpolicy /></>} />
      
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  </div>
)
  };

export default App;
