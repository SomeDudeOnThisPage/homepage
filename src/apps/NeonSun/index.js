import React from "react";
import './index.css';
import ParallaxHeader from "../../components/parallaxheader";
import Navbar from "../../components/navbar";
import NavLink from "../../components/navlink";
import BounceDown from "../../components/bouncedown";
import Footer from "../../components/footer";
import Typewriter from "typewriter-effect";

import ContentCard from '../../components/content-card';
import ContentContainer from '../../components/content-container';
import SectionHeader from '../../components/section-header';

class NeonSun extends React.Component
{
  render()
  {
    return(
      <div>
          <Navbar>
            <NavLink href="#">Projects</NavLink>
            <NavLink href="#">Boring Projects</NavLink>
            <NavLink href="#">Why</NavLink>
          </Navbar>
          <ParallaxHeader
            modifier={15}
            transition={'easeOut'}
            layers={[
              {
                image: 'forest/layer6.png?raw=true'
              },
              {
                image: 'forest/layer5.png?raw=true'
              },
              {
                image: 'forest/layer4.png?raw=true'
              },
              {
                image: 'forest/layer3.png?raw=true'
              },
              {
                image: 'forest/layer2.png?raw=true'
              },
              {
                image: 'forest/layer1.png?raw=true'
              },
              {
                image: 'forest/layer0.png?raw=true'
              },
            ]}
          >
          </ParallaxHeader>
          <div className='parallax-static-center container'>
            <BounceDown href={'#content-start'} text={'scroll down slowly :)'}/>
          </div>
          <div id='content-start' className='parallax-cover'>
            <div className='content mt-5'>
              <div className='container-fluid section-header mb-5 align-content-center'>
                <Typewriter className='section-header-title text-center text-dark'
                  onInit={(typewriter) => {
                    typewriter.typeString('Hello World!')
                      .callFunction(() => {
                        console.log('String typed out!');
                      }, [])
                      .start();
                  }}
                />
                <p className='section-header-subtitle text-center text-dark'>sometimes I type code to make
                computer go beep boop</p>
              </div>

              <ContentContainer>
                <ContentCard title={<p>Hah, you've been fooled!</p>}>
                  Hah, so... uh yea, this website is one of the crappy unfinished projects actually. I mostly just
                  made this to learn React and play around with animations like the parallax header and the weird
                  'scroll down'-button.
                </ContentCard>
              </ContentContainer>

              <SectionHeader title={'Projects'} subtitle={'a compilation of crappy & unfinished projects I work on'}/>

              <ContentContainer>
                <ContentCard title={<p>Hah, you've been fooled!</p>}>
                    Hah, so... uh yea, this website is one of the crappy unfinished projects actually. I mostly just
                    made this to learn React and play around with animations like the parallax header and the weird
                    'scroll down'-button.
                </ContentCard>
              </ContentContainer>

              <div className='container-fluid'>
                <img id={'deer'} src={process.env.PUBLIC_URL + '/img/forest/deer-wireframe.png?raw=true'} alt={'deer-wireframe'} />
              </div>
            </div>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default NeonSun;