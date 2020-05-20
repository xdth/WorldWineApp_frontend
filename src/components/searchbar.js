import React from 'react';

class Searchbar extends React.Component {
  
  render() {

    return (
      <>
      <div className="jumbotron text-center">
        <p>Search for your favorite wine</p> 
        <div className="container">
          <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 sinput-title" type="text" placeholder="Search" />
              <input className="form-control mr-sm-2 sinput-country" type="text" placeholder="Country" />
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
      </div>
      </>
    );
  }
}

export default Searchbar;