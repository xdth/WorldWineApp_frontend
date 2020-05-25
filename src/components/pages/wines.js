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
    fetch(process.env.REACT_APP_API_URL + "/wines?filter[where][title][like]=%25%25&filter[where][country][like]=%25&filter[limit]=500")
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
            <br/><br/><br/>
            <div className="row">
            {wines.map((result) => (
              <div className="col-sm-12" key={result.id}>
              <Link to={`${match.url}/${result.id}`}>
                <h4>{result.title}</h4>
                <h5><i>{result.designation}</i></h5>
                <h5><span className="badge badge-primary">{result.country}</span></h5>
              </Link>
                {/*<a href={'/wines/' + result.id}>xxx</a>*/}
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