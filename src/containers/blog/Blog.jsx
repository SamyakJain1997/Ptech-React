import React from 'react';
import Article from '../../components/article/Article';
import { blog001, blog002, blog003, blog004, blog005, blog006, blog007, blog008, blog009, blog010 } from './imports';
import './blog.css';

const Blog = () => {

  return (
    <div className="ptech__blog section__padding" id="blog">
      <div className="ptech__blog-heading">
        <div />
        <h1 className="gradient__text">Services Offered</h1>
      </div>
      <div className="ptech__blog-container">
          <div className="button">
            <a href="/services/Network">
              <Article imgUrl={blog001} heading="Network Design & Implementation" text="Operator facing challenges are extensive and unavoidable." />
            </a>
          </div>
          <div className="button">
            <a href="/services/Rfplanning">
              <Article imgUrl={blog002} heading="RF Planning & Designing" text="PTech’s resources are well trained to use state-of-the-art industry standard tools." />
            </a>
          </div>
          <div className="button">
            <a href="/services/RfOptimization">
              <Article imgUrl={blog003} heading="RF Optimization & Drive Test" text="High quality of service in mobile networks is the prerequisite for the commercial success." />
            </a>
          </div>
          <div className="button">
            <a href="/services/Networkoperation">
              <Article imgUrl={blog004} heading="Network Operations Services" text="Network performance is a measure of how effectively and efficiently the network is functioning." />
            </a>
          </div>
          <div className="button">
            <a href="/services/TransmissonPlan">
              <Article imgUrl={blog005} heading="Transmission Planning Services" text="Transmission network planning covers definition of the whole network topology, technology selections." />
            </a>
          </div>
          <div className="button">
            <a href="/services/ResourceManage">
              <Article imgUrl={blog006} heading="Resource Management" text="P TECH provides placement and deployment of manpower services." />
            </a>
          </div>
          <div className="button">
            <a href="/services/Automation">
              <Article imgUrl={blog007} heading="Automation Solutions" text="Having the best talent is a competitive advantage in today’s demanding and complex world. " />
            </a>
          </div>
          <div className="button">
            <a href="/services/DataCenter">
              <Article imgUrl={blog008} heading="Data Center Design & Solutions" text="Having the best talent is a competitive advantage in today’s demanding and complex world." />
            </a>
          </div>
          <div className="button">
            <a href="/services/SolutionOffer">
              <Article imgUrl={blog009} heading="Solution Offerings" text="Having the best talent is a competitive advantage in today’s demanding and complex world. " />
            </a>
          </div>
          <div className="button">
            <a href="/services/ProductOffer">
              <Article imgUrl={blog010} heading="Product Offerings" text="Having the best talent is a competitive advantage in today’s demanding and complex world. " />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Blog;
