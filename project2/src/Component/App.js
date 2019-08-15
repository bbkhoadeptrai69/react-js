import './../App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import React, { Component } from 'react';
var a = 1000;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: a
    }
  }
  
  editValue = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Component1 a={this.state.value}/>
          </div>
          <div className="col-8">
            <Component2 editValue={(value) => this.editValue(value)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
