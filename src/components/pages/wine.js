import React from 'react'
import {
    //Link,
    //useRouteMatch,
    useParams
  } from "react-router-dom";

  function Wine() {
    
    let { wineId } = useParams();

    return (
      <>
      <h3>Requested topic ID: {wineId}</h3>
      </>
    )
};

export default Wine