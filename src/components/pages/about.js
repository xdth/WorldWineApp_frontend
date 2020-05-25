import React from 'react';

const About = () => {
    return (
        <>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">About</li>
        </ol>
        <div className="row">
          <div className="col-sm-8">
          <h2>About</h2>
            <p>Author: lucasdth</p>
            <p>Find the source code <a href="https://github.com/xdth/WorldWineApp_frontend" alt="github">here</a>.</p>
            <p>This app is still under construction.</p>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
      </>        
    )
};

export default About