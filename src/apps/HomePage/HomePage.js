import React from 'react';
import Navbar from "../../components/navbar";
import '../../components/navbar/index.css';
import NavLink from "../../components/navlink";
import './index.css';

import {Parallax, ParallaxBanner} from "react-scroll-parallax/cjs";
import ParallaxProjectCard from "../../components/parallaxcard";

/**
 * Because fuck hash links lol.
 */
function clCoordsTop(elem)
{
  let box = elem.getBoundingClientRect();

  return{
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

class HomePage extends React.Component
{
  render()
  {
    return(
      <div id='navbar'>
        <Navbar>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Boring Projects</NavLink>
          <NavLink href="#">Why</NavLink>
        </Navbar>

        <ParallaxBanner
          layers={[
            {
              image: 'https://wallpapershome.com/images/pages/pic_v/20035.jpg',
              amount: 0.1,
              props: {
                style: { 'backgroundPosition': 'top center' }
              }
            },
          ]}
          style={{
            width: '100%',
            height: '100%',
            padding: 0,
            paddingBottom: '35%',
            margin: 0
          }}
        >

        <div className="container-fluid p-0 m-0">
          <div className="card rounded-0 border-0">
            <div className="card-body bg-dark pt-5 pb-5">
              <h1 className="text-center text-light pt-5">Projects and Stuff</h1>
              <p className="text-center text-light pb-5">This time I made the website with React.js and Bootstrap.</p>
            </div>
          </div>
        </div>

        <div className="container-fluid p-5">

          <div className="text-center row align-items-center">
            <ParallaxProjectCard img="glengine-preview.png" strength={-0.3}>
              <h5 className="card-title text-left pt-2">LWJGL Game Engine</h5>
              <p className="card-text text-left">A game engine written in Java using LWJGL implementing deferred rendering,
                ECS, Asset Management and a post-processing pipeline.</p>
              <button className="btn btn-primary float-left text-light" onClick={
                function()
                {
                  let e = document.getElementById("glengine");
                  window.scrollTo(0, clCoordsTop(e).top);
                }
              }>More...</button>
            </ParallaxProjectCard>

            <ParallaxProjectCard img="ffm-subway.png" strength={-0.5}>
              <h5 className="card-title text-left pt-2">Visualization of the Frankfurt subway.</h5>
              <p className="card-text text-left">A structural visualization of the Frankfurt subway using D3.js.<br/></p>
              <a href="https://www.ffm-subway.buhlmann.me" className="btn btn-primary float-left">Interactive Version</a>
            </ParallaxProjectCard>

            <ParallaxProjectCard img="webglengine.png" strength={-0.4}>
              <h5 className="card-title text-left pt-2">3D-Rendering using WebGL.</h5>
              <p className="card-text text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary float-left text-light" onClick={
                function()
                {
                  let e = document.getElementById("glengine");
                  window.scrollTo(0, clCoordsTop(e).top);
                }
              }>More...</button>
            </ParallaxProjectCard>
          </div>

        </div>


        <div className="container mb-5">
          <div className="card rounded-0 border-0 mt-2 mb-2">
            <div className="card-body bg-light pt-5 pb-5">
              <Parallax x={['10px', '200px']}>
                <img className="position-absolute" width='50px' height='50px' src={process.env.PUBLIC_URL + '/img/duck.jpg'} alt="duck"/>
              </Parallax>
              <h3 className="text-center">I discovered parallax effects! ~~Nyoom Zoom~~</h3>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark p-0 m-0 mt-5">
          <div id='glengine' className="card rounded-0 border-0">
            <div className="card-body bg-dark bt-5 pb-5">
              <h1 className="text-center text-light pt-5">LWJGL Game Engine</h1>
              <p className="text-center text-light pb-5">Yeet</p>
            </div>
          </div>
        </div>

        <div className='container-fluid p-0 m-0 mb-5'>
          <div className="card rounded-0 border-0 mb-5">
            <div className="border card-body bg-light bt-5 pb-5">
              <h3>Technical Info</h3>
              <ul>

              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark p-0 m-0 mt-5">
          <div id='glengine' className="card rounded-0 border-0">
            <div className="card-body bg-dark bt-5 pb-5">
              <h1 className="text-center text-light pt-5">WebGL Renderer</h1>
              <p className="text-center text-light pb-5">Yeet</p>
            </div>
          </div>
        </div>

        <div className='container-fluid p-0 m-0 mb-5'>
          <div className="card rounded-0 border-0 mb-5">
            <div className="border card-body bg-light bt-5 pb-5">
              <h3>Technical Info</h3>
              <ul>

              </ul>
            </div>
          </div>
        </div>
        </ParallaxBanner>
      </div>
    )
  }
}

export default HomePage;