import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Results from './components/results';

import Home from './components/pages/home';
import Wines from './components/pages/wines';
import About from './components/pages/about';

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
    
  function Topics() {
    let match = useRouteMatch();
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }

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
    <Route path="/topics">
      <Topics />
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
      <div className="container-fluid w-header">
        <Navbar/>
        <Searchbar callbackFromParent={this.myCallback} />
      </div> {/* -container-fluid */}

      {/* container */}
      <div className="container home">
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