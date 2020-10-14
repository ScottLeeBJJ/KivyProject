import React, { Component } from 'react';

import Home from "./capstone/capstone-container";
import Footer from "./capstone/footer";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="title">
          <h1>Project Capstone!</h1>
          <h3>This site host multiple mini-games for you to enjoy, absolutely free!!!</h3>
        </div>
        <Home />
        <Footer />
      </div>
    );
  }
}
