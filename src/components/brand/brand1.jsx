import React from 'react';
import { samsung, huawei, airtel, erricson, bsnl, nokia, tata, vi, stl, cergon } from './imports';
import './brand.css';

const Brand = () => (
  <div id="brand">
    <p className="heading">Our Partners</p>
    <div className="ptech__brand section__padding">
      <div>
        <img className="logo_img" alt="" src={samsung} />
      </div>
      <div>
        <img className="logo_img" alt="" src={huawei} />
      </div>
      <div>
        <img className="logo_img" alt="" src={airtel} />
      </div>
      <div>
        <img className="logo_img" alt="" src={erricson} />
      </div>
      <div>
        <img className="logo_img" alt="" src={bsnl} />
      </div>
      <div>
        <img className="logo_img" alt="" src={nokia} />
      </div>
      <div>
        <img className="logo_img" alt="" src={tata} />
      </div>
      <div>
        <img className="logo_img" alt="" src={vi} />
      </div>
      <div>
        <img className="logo_img" alt="" src={stl} />
      </div>
      <div>
        <img className="logo_img" alt="" src={cergon} />
      </div>
    </div>
  </div>
);

export default Brand;
