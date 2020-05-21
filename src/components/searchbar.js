import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '', 
      country: '', 
      wines: [] 
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  
  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();

    // api call
    const response = await fetch('http://192.168.1.44:3000/wines?filter[where][title][like]=%25'+ this.state.title + '%25&filter[where][country][like]='+ this.state.country + '%25&filter[limit]=3');
    const json = await response.json();
    this.setState({ wines: json });
    // console.log("dump from component" + JSON.stringify(this.state.wines, null, 2));

    this.props.callbackFromParent(this.state.wines);
  }
  
  
  render() {

    return (
      <>
      <div className="jumbotron text-center">
        <p>Search for your favorite wine</p> 
        <div className="container">
          <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
              <input className="form-control mr-sm-2 sinput-title" type="text" defaultValue={this.state.title} onChange={this.handleChangeTitle} placeholder="Search for a wine" />
              <input className="form-control mr-sm-2 sinput-country" type="text" defaultValue={this.state.country} onChange={this.handleChangeCountry} placeholder="Country" />
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" >Search</button>
            </form>
          </div>
      </div>
      </>
    );
  }
}

export default Searchbar;