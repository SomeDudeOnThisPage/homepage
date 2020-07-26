import ReactDOM from "react-dom";
import React from "react";
import NeonSun from "./apps/NeonSun/"
import { ParallaxProvider } from 'react-scroll-parallax';

window.onload = function()
{
  // scroll top, otherwise all the parallax panels' scroll breaks when we load the page not at the top
  window.scrollTo({ top: 0, behavior: 'auto' });

  // delay rendering of react dom by like 2 ms to allow scroll to happen
  setTimeout(function() {
    ReactDOM.render(
      <React.StrictMode>
        <ParallaxProvider>
          <NeonSun/>
        </ParallaxProvider>
      </React.StrictMode>,

      document.getElementById('root')
    );
  }, 1);
};