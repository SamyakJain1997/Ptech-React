import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Blog, Aboutus, Features, Whatptech, Header, } from './containers';
import { Brand, Navbar, Network, Rfplanning, Contact, Partners } from './components';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <ScrollToTop smooth />
      <Routes>
        <Route exact path="/" element={<><Header /><Brand /><Blog /></>} />
        <Route path="/home" element={<><Header /><Brand /><Blog /></>} />
        <Route exact path="/wptech" element={<><Whatptech /></>} />
        <Route exact path="/Features" element={<><Features /></>} />
        <Route exact path="/brand" element={<><Partners /></>} />
        <Route exact path="/Aboutus" element={<><Aboutus /></>} />
        <Route exact path="/blog" element={<><Blog /></>} />
        <Route exact path="/contact" element={<><Contact /></>} />

        {/* services extended blogs */}
        <Route exact path="/blog/Network" element={<><Network /></>} />
        <Route exact path="/blog/Rfplanning" element={<><Rfplanning /></>} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  </div>
);

export default App;
