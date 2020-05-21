import React from 'react'

const Wines = ({wines}) => {
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
                <a href={`/${wine.id}`} >link</a>
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