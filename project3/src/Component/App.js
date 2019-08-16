import React from 'react';
import './../App.css';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import { BrowserRouter as Router} from "react-router-dom";
import { config } from './Constants'
function App() {

  axios.get('http://api.local', {
    responseType: 'json', // default
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <Router>
      <div>
        <Header />
        <Content />
      </div>
    </Router>
    
  );
}

export default App;
