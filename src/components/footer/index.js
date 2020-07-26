import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

import './index.css';

const Footer = ({}) => {
  return (
    <div className={'footer container-fluid p-5'}>
      <div className='row'>
        <div className='col-sm'>
          <a href={'https://www.github.com/SomeDudeOnThisPage/'}><FontAwesomeIcon icon={faGithub} /> GitHub</a><br />
          <a href={'https://www.youtube.com/channel/UCpz_Xm5tD2p_wJ08T4Sp2ZQ'}><FontAwesomeIcon icon={faYoutube} /> YouTube</a><br />
          <a href={'#'}><FontAwesomeIcon icon={faTwitter} /> Twitter</a><br />
          <a href={'#'}><FontAwesomeIcon icon={faEnvelope} /> E-Mail</a><br />
        </div>
        <div className='col-sm'>

        </div>
      </div>
    </div>
  );
};

export default Footer;