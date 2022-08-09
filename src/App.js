import React from 'react';
// import PacmanLoader from "react-spinners/GridLoader";
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Blog, Aboutus, Features, Whatptech, Header, Video } from './containers';
import { Navbar,
   Network,
   Rfplanning,
   Contact,
   Partners,
   Ourpolicy,
   Environmentpolicy,
   Automation,
   DataCenter,
   Networkoperation,
   ProductOffer,
   ResourceManage,
   RfOptimization,
   SolutionOffer,
   TransmissonPlan, 
   Brand} from './components';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const App = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() =>{
  //   setLoading(true)
  //   setTimeout(() =>{
  //     setLoading(false)
  //   },2000)
  // },[])

  return(
  <div className="App">
    {/* {
      loading ?
      <div className="pacman">
        <PacmanLoader color="#24499b" loading={loading} size={20} />
      </div>
      :
    } */}
      <Router>
      <Navbar />
      <ScrollToTop smooth />
      <Routes>
        <Route exact path="/" element={<><Video/><Header /><Blog /><Brand/></>} />
        <Route path="/home" element={<><Video/><Header /><Blog /><Brand/></>} />
        <Route exact path="/wptech" element={<><Whatptech /></>} />
        <Route exact path="/Features" element={<><Features /></>} />
        <Route exact path="/brand" element={<><Partners /></>} />
        <Route exact path="/Aboutus" element={<><Aboutus /></>} />
        <Route exact path="/blog" element={<><Blog /></>} />
        <Route exact path="/contact" element={<><Contact /></>} />

        {/* services extended blogs */}
        <Route exact path="/blog/Network" element={<><Network /></>} />
        <Route exact path="/blog/Rfplanning" element={<><Rfplanning /></>} />
        <Route exact path="/blog/Automation" element={<><Automation /></>} />
        <Route exact path="/blog/DataCenter" element={<><DataCenter /></>} />
        <Route exact path="/blog/Networkoperation" element={<><Networkoperation /></>} />
        <Route exact path="/blog/ProductOffer" element={<><ProductOffer /></>} />
        <Route exact path="/blog/ResourceManage" element={<><ResourceManage /></>} />
        <Route exact path="/blog/RfOptimization" element={<><RfOptimization /></>} />
        <Route exact path="/blog/SolutionOffer" element={<><SolutionOffer /></>} />
        <Route exact path="/blog/TransmissonPlan" element={<><TransmissonPlan /></>} />

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
