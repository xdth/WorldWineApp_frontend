import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  //useRouteMatch,
  //useParams
} from "react-router-dom";
/* import logo from './logo.svg'; */
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Results from './components/results';

import Home from './components/pages/home';
import Wines from './components/pages/wines';
import About from './components/pages/about';

import GoToTop from "./components/GoToTop";

import './App.css';

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
    // this.jdebug(this.state.winesFromSearch);
  }
  
  jdebug = (arg) => {
    console.log("from APP: " + typeof arg);
    console.log("from APP2: " + JSON.stringify(arg, null, 2));
  }

  render() {
    
  /* Show either the pages or the search results */
  let SearchResults;
  if (this.state.winesFromSearch && this.state.winesFromSearch.length > 0) {
    SearchResults = <Results results={this.state.winesFromSearch}/>
  } else {
    SearchResults = 
    <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/wines">
      <Wines />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>;
  }


    return (
      <>
      <Router>
      
      {/* container-fluid */}
      <div className="container-fluid" id="w-header">
        <Navbar/>
        <Searchbar callbackFromParent={this.myCallback} />
      </div> {/* -container-fluid */}

      {/* container */}
      <div className="container home">
        <GoToTop/>
        {/* pages or search results*/}
        {SearchResults}
      </div>
      {/* /container */}

      </Router>
      </>
    );
  }
}


export default App;