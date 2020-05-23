import React from 'react'

class City extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        wines: []
    };
  }

  async componentDidMount() {
    // api call
    const response = await fetch('http://192.168.1.44:3000/wines?filter[where][title][like]=%25%25&filter[where][country][like]=%25&filter[limit]=3');
    const json = await response.json();
    this.setState({ wines: json });
    // console.log("dump from component" + JSON.stringify(this.state.wines, null, 2));
  }
  render() {
    let results = this.state.wines;
    return (
    <>

<div className="row">
        <div className="col-sm-8">
          <h3>Wines catalog</h3>
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
    </>
    );
  }
}


export default City