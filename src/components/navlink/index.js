import React from 'react';
import './index.css'

class NavLink extends React.Component
{
  render()
  {
    const {href, children} = this.props;

    return (
      <a className='nav-item nav-link active' href={href}>{children}</a>
    );
  }
}

export default NavLink;