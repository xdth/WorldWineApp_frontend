import React, { useState, useEffect } from "react";
import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  //useParams
  } from "react-router-dom";
import Wine from './wine';

const Wines = () => {

  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.44:3000/wines?filter[where][title][like]=%25%25&filter[where][country][like]=%25&filter[limit]=500")
      .then(results => {
        return results.json();
      })
      .then(results => {
        setWines(results);
      })
      .catch(err => {
        console.log(123123);
      });
  }, []);

  //let wineId = useParams();
  let match = useRouteMatch();
  // console.log("wineid is : " + JSON.stringify(match, null, 2));

  
  return (
    <>
    <Switch>
      <Route path={`${match.path}/:wineId`}>
        <Wine />
      </Route>

      <Route exact path={match.path}>

        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Wines</li>
        </ol>
        <div className="row">
          <div className="col-sm-8">
            <h2>Wines catalog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <br/>
            <div className="row">
            {wines.map((result) => (
              <div className="col-sm-12" key={result.id}>
                <Link to={`${match.url}/${result.id}`}>
                <h5>{result.title}</h5>
                <h6>{result.country}</h6>
                <p>{result.resultry}</p>
                  
                </Link>
                <hr/>
              </div>
            ))}
            </div>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
      </Route>
    </Switch>

    </>
  );
};

export default Wines;