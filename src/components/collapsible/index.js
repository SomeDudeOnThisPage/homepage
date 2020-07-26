import React from 'react';
import "./index.css";

let current = 0;
function id()
{
  return current++;
}

class Collapsible extends React.Component
{
  constructor(props)
  {
    super(props);
    this.id = id();
  }

  render()
  {
    const {title, children} = this.props;
    const id = this.id;

    return(
      <div className="card">
        <div className="btn btn-dark btn-lg rounded-0" data-toggle="collapse" data-target={"#content-" + id} aria-expanded="false">
          <h2 className="mb-0">
              {title}
          </h2>
        </div>

        <div id={"content-" + id} className="collapse">
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapsible;