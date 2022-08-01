import React from 'react';
import { useNavigate } from 'react-router-dom';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09, blog10 } from './imports';
import './blog.css';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="ptech__blog section__padding" id="blog">
      <div className="ptech__blog-heading">
        <h1 className="gradient__text">Solutions Offered by Us</h1>
      </div>
      <div className="ptech__blog-container">
        <div className="ptech__blog-container_groupB">
          <div className="button" onClick={() => navigate('/blog/Network')}>
            <Article imgUrl={blog01} heading="Network Design & Implementation" text="Operator facing challenges are extensive and unavoidable. New technology, Coverage, Capacity, and Maximizing the Value of Existing Network Resources, are challenging requirements. Network Planning is crucial services for designing any network. PTECH helps customer not only in Network design but also in expanding rapidly and cost effectively." />
          </div>
          <div className="button" onClick={() => navigate('/blog/Rfplanning')}>
            <Article imgUrl={blog02} heading="RF Planning & Designing" text="P TECH’s employees are well trained to use state-of-the-art industry standard tools for design, planning and testing the networks to ensure that the network design meets the network performance objectives of the customer." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog03} heading="RF Optimization & Drive Test" text="High quality of service in mobile networks is the prerequisite for the commercial success. Continuous optimization is a process, which focuses on checking the network quality continuously and takes actions when needed. It is a more constant way of maintaining good quality in the network, especially when the mobile networks are changing rapidly and more and more customers are being served." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog04} heading="Network Operations Services" text="Network performance is a measure of how effectively and efficiently the network is functioning. Network performance is an internal measure mainly derived from Network Management data. This measure provides an Engineering perspective of network quality." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog05} heading="Transmission Planning Services" text="Transmission network planning covers definition of the whole network topology, technology selections, equipment configurations, synchronization and management plans. Essential areas of expertise are also site candidate identification and selection, technical site surveys and line-of-sight checks is a more constant way of maintaining good quality in the network, especially when the mobile networks are changing rapidly and more and more customers are being served." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog06} heading="Resource Management" text="P TECH provides placement and deployment of manpower services. We have a databank of qualified professional engineers. Our Human Resource team excels in recruitment and training, which results in retention of skills engineers." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog07} heading="Automation Solutions" text="Having the best talent is a competitive advantage in today’s demanding and complex world the success of any business relies upon talent; acquiring the most qualified people is increasingly competitive. We built upon our deep recruitment expertise and based on rigorous processes, our innovative approach ensures the results you need." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog08} heading="Data Center Design & Solutions" text="Having the best talent is a competitive advantage in today’s demanding and complex world the success of any business relies upon talent; acquiring the most qualified people is increasingly competitive. We built upon our deep recruitment expertise and based on rigorous processes, our innovative approach ensures the results you need." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog09} heading="Solution Offerings" text="Having the best talent is a competitive advantage in today’s demanding and complex world the success of any business relies upon talent; acquiring the most qualified people is increasingly competitive. We built upon our deep recruitment expertise and based on rigorous processes, our innovative approach ensures the results you need." />
          </div>
          <div className="button" onClick={() => navigate('/blog/test')}>
            <Article imgUrl={blog10} heading="Product Offerings" text="Having the best talent is a competitive advantage in today’s demanding and complex world the success of any business relies upon talent; acquiring the most qualified people is increasingly competitive. We built upon our deep recruitment expertise and based on rigorous processes, our innovative approach ensures the results you need." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
