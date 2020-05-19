import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      scrolled: false,
      title: '', 
      country: '', 
      wines: [] 
    };

  }

  
  render() {


    return (
      <>
      
      {/* container */}
      <div className="container-fluid">

        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>      
        {/* /navbar */}

        {/* search */}
        <div className="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p> 
        </div>
        {/* /search */}

      </div>
      {/* -container */}
      

      {/* container */}
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div className="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div className="col-sm-4">
            <h3>Column 3</h3>        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>
      </div>
      {/* /container */}









      </>
    );
  }
}


export default App;