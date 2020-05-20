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
      <div className="container-fluid w-header">

        {/* navbar */}
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
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            {/*<form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>*/}
          </div>
        </nav>      
        {/* /navbar */}

        {/* search */}
        <div className="jumbotron text-center">
          <p>Search for your favorite wine</p> 
          <div className="container">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 sinput-title" type="text" placeholder="Search" />
                <input className="form-control mr-sm-2 sinput-country" type="text" placeholder="Country" />
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
        </div>
        {/* /search */}

      </div>
      {/* -container */}
      

      {/* container */}
      <div className="container home">
        {/* homepage */}
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
            <h3>Column P</h3>        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <h3>Column A</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            <div className="row">
              <div className="col-sm-12">
                <h3>Row 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
              </div>
              <div className="col-sm-12">
                <h3>Row 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
              </div>
              <div className="col-sm-12">
                <h3>Row 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <h3>Column P</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>

        <div className="row">
              <div className="col-sm-12">
                <p>0 results found.</p>
              </div>
        </div>


      </div>
      {/* /container */}









      </>
    );
  }
}


export default App;