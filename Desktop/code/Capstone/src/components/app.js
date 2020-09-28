import React, { Component } from 'react';

import Home from "./capstone/capstone-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp Capstone Games Site</h1>

        <Home />
      </div>
    );
  }
}
