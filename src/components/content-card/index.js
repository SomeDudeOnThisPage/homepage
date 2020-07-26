import React, {useEffect, useState} from 'react';
import './index.css';

export default ({title, children}) => {
  return (
    <div className={'card content-card'}>
      <div className={'card-body'}>
        <div className={'card-title text-dark font-weight-bold'}>
          {title}
        </div>
        {children}
      </div>
    </div>
  )
}