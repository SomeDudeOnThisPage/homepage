import React from "react";

import './../index.css';

class ParallaxLayer extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      interval: undefined,
      scroll: 0
    }
  }

  componentDidMount()
  {
    this.state.interval = setInterval(() =>
    {
      this.setState({
        scroll: window.scrollY
      })
    }, 2)
  }

  componentWillUnmount()
  {
    clearInterval(this.interval);
  }

  render()
  {
    const {img, layer, total, children} = this.props;

    const y = (-100 * (total - layer) / 2.0);
    const styles = {
      transform: `translateY(${y}px)`,
      scale: 1 + (total - layer) / 2.0 * window.scrollY
    };

    return (
      <div className='parallax_layer' style={styles}>
        <img src={img} alt=''/>
      </div>
    );
  }
}

export default ParallaxLayer;