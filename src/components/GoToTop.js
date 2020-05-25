import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        scrolled: false
    };
    //this.handleChangeScroll = this.handleChangeScroll.bind(this);
  }

  handleChangeScroll(event) {      
    window.addEventListener('scroll',() => {
      const isTop = window.scrollY < 150;
      if(isTop !== true) {
        this.setState({scrolled: true});
      } else {
        this.setState({scrolled: false});
      }
    })
  }

  componentDidMount(){
    this.handleChangeScroll();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  render() {

    let arrow = 
      <div onClick={() => this.scrollToTop()} className="go-to-top">
        <img src="/images/GoToTop.png" alt="Go to the top of the page" />
      </div>;

    return (
      <>
      {this.state.scrolled === true ? arrow : null}
      </>
    );
  }
}


export default App;
