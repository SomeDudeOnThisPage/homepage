import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import {AnimatePresence, motion, useAnimation} from 'framer-motion';
import './index.css';

const style = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  marginBottom: '3rem',
  marginLeft: '-0.5rem',
};

const transition = {
  y: {
    duration: 0.75,
    yoyo: Infinity,
    ease: 'easeOut'
  }
};

const animation = {
  y: ['-50%', '50%'],
};

const hover = {
  scale: 1.25,
};

const tap = {
  scale: 0.85,
};

const style_text = {
  display: 'block',
  opacity: 0
};

const transition_text = {
  duration: 0.75,
  yoyo: 'once',
};

const animation_text = {
  scale: [0.25, 1, 0.85, 1, 0.95, 1],
  opacity: [0, 1],
  scaleX: [0.5, 1, 1, 1]
};

const animation_exit = {
  scale: [1, 0.85, 0.35, 0.65, 0.25],
  opacity: [1, 0],
  scaleX: [1, 1, 1, 0.5]
};

const BounceDown = ({href, text}) => {
  const [hidden, setHidden] =  useState(false);

  const onScroll = ({}) => {
    // show when scroll is at top
    setHidden(document.scrollingElement.scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    // cleanup function
    return () => {window.removeEventListener('scroll', onScroll)}
  }, []);

  return (
    <div>
      <AnimatePresence exitBeforeEnter={true}>
      {
        // this REALLY shouldn't have been that difficult to create, still took me like an hour...
        !hidden && (
          <motion.div
            className={'text-center mt-5 bounce-down'}
            style={style_text}
            transition={transition_text}
            animate={animation_text}
            exit={animation_exit}
          >
            <a className='text-center btn btn-outline-' href={href}>
              <div>
                <motion.span style={style} transition={transition} animate={animation} whileHover={hover} whileTap={tap}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} color={'#F9F9FAFF'} size={'3x'} />
                </motion.span>
              </div>
            </a>
            <p>{text}</p>
          </motion.div>
        )
      }
      </AnimatePresence>
    </div>
  );
};

export default BounceDown;