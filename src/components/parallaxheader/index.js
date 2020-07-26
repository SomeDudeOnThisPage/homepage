import React from "react";
import Plx from 'react-plx';
import './index.css';

class ParallaxHeader extends React.Component
{
  render()
  {
    const {modifier, transition, layers} = this.props;
    let i = layers.length;

    const items = [];
    for (const item of layers.values())
    {
      const pd = [
        {
          start: '0vh',
          end: 100 + (i / 2.0) * modifier + 'vh',
          easing: transition,
          properties: [
            {
              startValue: 0,
              endValue: modifier * Math.max((i - 1), 0), // last is 10*0, as we want the last layer to be static for scroll / cover purposes
              property: 'translateY',
              unit: '%',
            },

            // blur is REALLY pretty, but also REALLY performance intensive sadge
            // literally a 20% spike in GPU usage on my pc when using blur lmao
            // {
            //   startValue: 0,
            //   endValue: 2 * Math.max((i - 1), 0),
            //   property: 'blur'
            // }
          ],
        },
      ];

      const styles = {
        zIndex: i
      };

      items.push(
        <Plx key={i} className='parallax-layer' parallaxData={pd}>
          <img className='parallax-img' src={process.env.PUBLIC_URL + '/img/' + item.image} alt="" style={styles}/>
        </Plx>
      );
      i--;
    }

    return(
      <div className='parallax'>
        {items}
        <div className='parallax-overlay' />
      </div>
    );
  }
}

export default ParallaxHeader;