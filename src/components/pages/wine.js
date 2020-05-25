import React, { useState, useEffect } from "react";
import {
    //Link,
    //useRouteMatch,
    useParams
  } from "react-router-dom";

  function Wine() {
    
    let { wineId } = useParams();
    wineId = parseInt(wineId);

    const [wine, setWine] = useState([]);
  
    useEffect(() => {
      console.log("wineis : " + JSON.stringify(wineId, null, 2));
      console.log("type: " + typeof wineId);
      // fetch("http://192.168.1.44:3000/wines?filter[where][title][like]=%25%25&filter[where][country][like]=%25&filter[limit]=3")
      fetch("http://192.168.1.44:3000/wines/" + wineId)
        .then(results => {
          return results.json();
        })
        .then(results => {
          setWine(results);
        })
        .catch(err => {
          console.log(123123);
        });
    }, [wineId]);




    return (
      <>
      <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/wines">Wines</a></li>
          <li className="breadcrumb-item active">{wine.title}</li>
      </ol>
      <div className="row">
        <div className="col-sm-8">
          <h2>{wine.title}</h2>
          <h5>{wine.country}</h5>

          <blockquote className="blockquote text-right">
            <p className="mb-0">{wine.description}</p>
            <footer className="blockquote-footer">{wine.taster_name} <cite title="Review author">{wine.taster_twitter_handle ? "(" + wine.taster_twitter_handle + ")" : null}</cite></footer>
          </blockquote>      

          <table className="table">
            <tbody>
              <tr>
                <th scope="col">Designation</th>
                <td>{wine.designation}</td>
              </tr>
              <tr>
                <th scope="col">Stars</th>
                <td>{(wine.points/100)*5}</td>
              </tr>
              <tr>
                <th scope="col">Points</th>
                <td>{wine.points}</td>
              </tr>
              <tr>
                <th scope="col">Price</th>
                <td>USD {wine.price}</td>
              </tr>
              <tr>
                <th scope="col">Province</th>
                <td>{wine.province}</td>
              </tr>
              <tr>
                <th scope="col">Region 1</th>
                <td>{wine.region_1}</td>
              </tr>
              <tr>
                <th scope="col">Region 2</th>
                <td>{wine.region_1}</td>
              </tr>
              <tr>
                <th scope="col">Variety</th>
                <td>{wine.variety}</td>
              </tr>
              <tr>
                <th scope="col">Winery</th>
                <td>{wine.winery}</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="col-sm-4">
        </div>
      </div>

      </>
    )
};

export default Wine