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
      <div className="row">
        <div className="col-sm-8">
          <h2>{wine.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
        <div className="col-sm-4">
          <h3>Sidebar</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
      </div>

      </>
    )
};

export default Wine