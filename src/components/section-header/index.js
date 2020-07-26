import React from 'react';
import './index.css';

export default ({title, subtitle}) => {
  return (
    <div className='container-fluid section-header mb-5 mt-5'>
      <p className='section-header-title text-center text-dark'>{title}</p>
      <p className='section-header-subtitle text-center text-dark'>{subtitle}</p>
    </div>
  );
}