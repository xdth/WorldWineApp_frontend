import React from 'react'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";

const Wines = ({wines}) => {
    if (!wines) return 'no data';
    if (!Array.isArray(wines)) return 'results are not array'
    //let match = useRouteMatch();
    return (
        <div className="row">
          <div className="col-sm-8">
            <h3>Search results</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <br/>
            <div className="row">
            {wines.map((wine) => (
              <div className="col-sm-12" key={wine.id}>
                <h5>{wine.title}</h5>
                <h6>{wine.country}</h6>
                <p>{wine.winery}</p>
                <a href={`/wines/${wine.id}`} >link</a>
                {/*<Link to={`${match.url}/${wine.id}`}>Link</Link>*/}
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

export default Wines