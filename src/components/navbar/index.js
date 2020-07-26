import React from 'react';
import './index.css'

class Navbar extends React.Component
{
  render()
  {
    const {children} = this.props;

    return(
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <img src={process.env.PUBLIC_URL + "/img/duck.jpg"} alt="" className="navbar-brand"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {children}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;