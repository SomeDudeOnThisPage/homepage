import React from "react";
import {ParallaxBanner} from "react-scroll-parallax/cjs";
import './index.css'

class ParallaxProjectCard extends React.Component
{
  render()
  {
    const {img, strength, children} = this.props;

    return(
      <div className="col-sm pb-3 pt-3">
        <div className="card project-card rounded-0">
          <div className="card-body">
            <ParallaxBanner
              layers={[
                {
                  image: process.env.PUBLIC_URL + '/img/' + img,
                  amount: strength,
                  props: {
                    style: { 'backgroundPosition': 'top center' }
                  }
                }
              ]}
              style={{
                width: '100',
                height: '200px',
                padding: 0,
                margin: 0
              }}
            />
            {children}
          </div>
        </div>
      </div>
      );
  }
}

export default ParallaxProjectCard;