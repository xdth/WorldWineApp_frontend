import React from 'react';

class Navbar extends React.Component {
  
  render() {

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">WorldWineApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Countries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Ranking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
        </div>
      </nav>      
      </>
    );
  }
}

export default Navbar;