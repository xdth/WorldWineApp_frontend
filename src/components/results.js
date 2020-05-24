import React from 'react'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";


const Results = ({results}) => {
  let match = useRouteMatch();
  return (
    <>
      <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/wines">Wines</a></li>
          <li className="breadcrumb-item active">Search results</li>
      </ol>
      <div className="row">
        <div className="col-sm-8">
          <h2>Search results</h2>
          <br/><br/><br/>
          <div className="row">
          {results.map((result) => (
            <div className="col-sm-12" key={result.id}>
              <Link to={`${match.url}/${result.id}`}>
                <h4>{result.title}</h4>
                <h5><i>{result.designation}</i></h5>
                <h5><span className="badge badge-primary">{result.country}</span></h5>
              </Link>
              <hr/>
            </div>
          ))}
          </div>
        </div>
        <div className="col-sm-4">
        </div>
      </div>
    </>
  )
};

export default Results