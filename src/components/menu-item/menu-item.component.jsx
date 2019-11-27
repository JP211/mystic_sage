import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL }) => (
  <div
  style={{
    backgroundImage: `url(${imageURL})`
  }}
   className = 'menu-item'>
    <div className = 'content'>
    <h1 className = 'title'>{title}</h1>
    <span className = 'subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
