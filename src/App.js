import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Wines from './components/wines';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      winesFromSearch: [] 
    };
    this.myCallback = this.myCallback.bind(this);
  }

  myCallback(dataFromSearch) {
    this.setState({ winesFromSearch: dataFromSearch });
    this.jdebug(this.state.winesFromSearch);
  }
  
  jdebug = (arg) => {
    console.log("from child2: " + typeof arg);
    console.log("from child2: " + JSON.stringify(arg, null, 2));
  }


  render() {

{/* Routing */}
  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }    

    return (
      <>
      <Router>
      
      {/* container-fluid */}
      <div className="container-fluid w-header">
          <Navbar/>

        <Searchbar callbackFromParent={this.myCallback} />
      </div> {/* -container-fluid */}
      

      {/* container */}
      <div className="container home">
        {/* pages */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Wines wines={this.state.winesFromSearch} />

        {/* footer?
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
          */}

        <div className="row">
              <div className="col-sm-12">
                <p>0 results found.</p>
              </div>
        </div>


      </div>
      {/* /container */}









      </Router>
      </>
    );
  }
}


export default App;