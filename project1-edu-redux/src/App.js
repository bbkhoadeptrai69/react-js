import './App.css';
import News from './News';
import {connect} from 'react-redux';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.dulieu}
        <News></News>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

export default connect(mapStateToProps)(App);

