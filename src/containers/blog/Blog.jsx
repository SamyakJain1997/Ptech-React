import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09, blog10 } from './imports';
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
            <a href="/blog/Network">
              <Article imgUrl={blog01} heading="Network Design & Implementation" text="Operator facing challenges are extensive and unavoidable." />
            </a>
          </div>
          <div className="button">
            <a href="/blog/Rfplanning">
              <Article imgUrl={blog02} heading="RF Planning & Designing" text="PTech’s resources are well trained to use state-of-the-art industry standard tools." />
            </a>
          </div>
          <div className="button">
            <a href="/blog/RfOptimization">
              <Article imgUrl={blog03} heading="RF Optimization & Drive Test" text="High quality of service in mobile networks is the prerequisite for the commercial success." />
            </a>
          </div>
          <div className="button">
            <a href="/blog/Networkoperation">
              <Article imgUrl={blog04} heading="Network Operations Services" text="Network performance is a measure of how effectively and efficiently the network is functioning." />
            </a>
          </div>
          <div className="button">
            <a href="/blog/TransmissonPlan">
              <Article imgUrl={blog05} heading="Transmission Planning Services" text="Transmission network planning covers definition of the whole network topology, technology selections, equipment configurations, synchronization and management plans." />
            </a>
          </div>
          <div className="button">
            <a href="/blog/ResourceManage">
              <Article imgUrl={blog06} heading="Resource Management" text="P TECH provides placement and deployment of manpower services." />
            </a>
          </div>
          <div className="button">
            <a href="/blog/Automation">
              <Article imgUrl={blog07} heading="Automation Solutions" text="Having the best talent is a competitive advantage in today’s demanding and complex world. " />
            </a>
          </div>
          <div className="button">
            <a href="/blog/DataCenter">
              <Article imgUrl={blog08} heading="Data Center Design & Solutions" text="Having the best talent is a competitive advantage in today’s demanding and complex world." />
            </a>
          </div>
          <div className="button">
            <a href="/blog/SolutionOffer">
              <Article imgUrl={blog09} heading="Solution Offerings" text="Having the best talent is a competitive advantage in today’s demanding and complex world. " />
            </a>
          </div>
          <div className="button">
            <a href="/blog/ProductOffer">
              <Article imgUrl={blog10} heading="Product Offerings" text="Having the best talent is a competitive advantage in today’s demanding and complex world. " />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Blog;
