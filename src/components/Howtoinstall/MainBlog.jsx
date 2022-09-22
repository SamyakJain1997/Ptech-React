import React from 'react';
import Article from '../../components/article/Article';
import mac1 from '../../assets/installpythonmac.jpg';
import mac2 from '../../assets/installjupytermac.jpg';
import mac3 from '../../assets/installvsmac.jpg';
import mac4 from '../../assets/runfirstmac.jpg';
import win1 from '../../assets/installpythonwin.jpg';
import win2 from '../../assets/installjupyterwin.jpg';
import './mainblog.css';

const Blog = () => {

  return (
    <div className="ptech__blog section__padding" id="Blog">
      <div className="ptech__blog-heading">
        <div />
        <h1 className="gradient__text">Installation Guide</h1>
      </div>
      <div className="ptech__blog-container">
          <div className="button">
            <a href="/blog/mac/pyhthon-jinja">
              <Article imgUrl={mac1} heading="Install Python JINJA MAC OS" text="" />
            </a>
          </div>
          <div className="button">
            <a href="/blog/mac/jupyer-notebook">
              <Article imgUrl={mac2} heading="Install JUPYTER Notebook MAC OS" text="" />
            </a>
          </div>
          <div className="button">
            <a href="/blog/mac/visual-studio-code">
              <Article imgUrl={mac3} heading="Install VS Code  MAC OS" text="" />
            </a>
          </div>
          <div className="button">
            <a href="/blog/mac/run-first-code">
              <Article imgUrl={mac4} heading="Run Your First Code  MAC OS" text="" />
            </a>
          </div>
      </div>
<br />
      <div className="ptech__blog-container">
      <div className="button">
            <a href="/blog/windows/pyhthon-jinja">
              <Article imgUrl={win1} heading="Install Python JINJA Windows" text="" />
            </a>
          </div>
          <div className="button">
            <a href="/blog/windows/jupyer-notebook">
              <Article imgUrl={win2} heading="Install JUPYTER Windows" text="" />
            </a>
          </div>
          <div className="button">
            <a href="/blog/windows/visual-studio-code">
              <Article imgUrl={mac3} heading="Install VS Code Windows" text="" />
            </a>
          </div>
          <div className="button">
            <a href="/blog/windows/run-first-code">
              <Article imgUrl={mac4} heading="Run Your First Code Windows" text="" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Blog;
