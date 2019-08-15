import './../App.css';
import Component1 from './Component1';
import Component2 from './Component2';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Component1/>
        <Component2 />
      </div>
    );
  }
}
export default App
