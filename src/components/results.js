import React from 'react'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";


const Results = ({results}) => {
  if (!results) return 'no data';
  if (!Array.isArray(results)) return 'results are not array'
  //let match = useRouteMatch();
  return (
      <div className="row">
        <div className="col-sm-8">
          <h3>Search results</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <br/>
          <div className="row">
          {results.map((result) => (
            <div className="col-sm-12" key={result.id}>
              <h5>{result.title}</h5>
              <h6>{result.country}</h6>
              <p>{result.resultry}</p>
              <a href={`/results/${result.id}`} >link</a>
              {/*<Link to={`${match.url}/${result.id}`}>Link</Link>*/}
            </div>
          ))}
          </div>
        </div>
        <div className="col-sm-4">
          <h3>Column P</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
      </div>


  )
};

export default Results