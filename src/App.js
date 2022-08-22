import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Blog, Aboutus, Features, Whatptech, Header, Video } from './containers';
import { Navbar, Network, Rfplanning, Contact, Partners, Ourpolicy, Environmentpolicy, Automation, DataCenter, Networkoperation, ProductOffer, ResourceManage, RfOptimization, SolutionOffer, TransmissonPlan,  Brand} from './components';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const App = () => {

  return(
  <div className="App">
      <Router>
      <Navbar />
      <ScrollToTop smooth />
      <Routes>
        <Route exact path="/" element={<><Video/><Header /><Blog /><Brand/></>} />
        <Route path="/home" element={<><Video/><Header /><Blog /><Brand/></>} />
        <Route exact path="/wptech" element={<><Whatptech /></>} />
        <Route exact path="/Features" element={<><Features /></>} />
        <Route exact path="/brand" element={<><Partners /></>} />
        <Route exact path="/aboutus" element={<><Aboutus /></>} />
        <Route exact path="/blog" element={<><Blog /></>} />
        <Route exact path="/contact" element={<><Contact /></>} />

        {/* services extended blogs */}
        <Route exact path="/blog/network" element={<><Network /></>} />
        <Route exact path="/blog/rfplanning" element={<><Rfplanning /></>} />
        <Route exact path="/blog/automation" element={<><Automation /></>} />
        <Route exact path="/blog/dataCenter" element={<><DataCenter /></>} />
        <Route exact path="/blog/networkoperation" element={<><Networkoperation /></>} />
        <Route exact path="/blog/productOffer" element={<><ProductOffer /></>} />
        <Route exact path="/blog/resourceManage" element={<><ResourceManage /></>} />
        <Route exact path="/blog/rfOptimization" element={<><RfOptimization /></>} />
        <Route exact path="/blog/solutionOffer" element={<><SolutionOffer /></>} />
        <Route exact path="/blog/transmissonPlan" element={<><TransmissonPlan /></>} />

        {/* footer plan */}
        <Route exact path="/ourpolicy" element={<><Ourpolicy /></>} />
        <Route exact path="/environmentpolicy" element={<><Environmentpolicy /></>} />
      
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  </div>
)
  };

export default App;
