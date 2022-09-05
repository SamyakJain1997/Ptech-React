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
    <div className="ptech__blog section__padding" id="blog">
      <div className="ptech__blog-heading">
        <div />
        <h1 className="gradient__text">Installation Guide For Mac OS</h1>
      </div>
      <div className="ptech__blog-container">
          <div className="button">
            <a href="/howtoinstall/mac/pyhthon-jinja">
              <Article imgUrl={mac1} heading="Install Python & JINJA" text="Step-by-step guide to install python & JINJA on MAC OS." />
            </a>
          </div>
          <div className="button">
            <a href="/howtoinstall/mac/jupyer-notebook">
              <Article imgUrl={mac2} heading="Install JUPYTER Notebook" text="Step-by-step guide to install JUPYTER Notebook on MAC OS." />
            </a>
          </div>
          <div className="button">
            <a href="/howtoinstall/mac/visual-studio-code">
              <Article imgUrl={mac3} heading="Install Visual Studio Code" text="Step-by-step guide to install Visual Studio Code on MAC OS." />
            </a>
          </div>
          <div className="button">
            <a href="/howtoinstall/mac/run-first-code">
              <Article imgUrl={mac4} heading="Run Your First Code" text="Step-by-step guide to Run Your First Code on MAC OS." />
            </a>
          </div>
      </div>
<br />
<br />
<br />
      <div className="ptech__blog-heading">
        <div />
        <h1 className="gradient__text">Installation Guide For Windows OS</h1>
      </div>
      <div className="ptech__blog-container">
      <div className="button">
            <a href="/howtoinstall/windows/pyhthon-jinja">
              <Article imgUrl={win1} heading="Install Python & JINJA" text="Step-by-step guide to install python & JINJA on Windows Operating System." />
            </a>
          </div>
          <div className="button">
            <a href="/howtoinstall/windows/jupyer-notebook">
              <Article imgUrl={win2} heading="Install JUPYTER Notebook" text="Step-by-step guide to install JUPYTER Notebook on Windows Operating System." />
            </a>
          </div>
          <div className="button">
            <a href="/howtoinstall/windows/visual-studio-code">
              <Article imgUrl={mac3} heading="Install Visual Studio Code" text="Step-by-step guide to install Visual Studio Code on Windows Operating System." />
            </a>
          </div>
          <div className="button">
            <a href="/howtoinstall/windows/run-first-code">
              <Article imgUrl={mac4} heading="Run Your First Code" text="Step-by-step guide to Run Your First Code on Windows Operating System." />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Blog;
