import React from 'react';
import './../App.css';
import axios from 'axios';

function App() {

  axios({
    method:'get',
    url: '/',
    baseURL: 'http://api.local'
  }).then((response) => {
    console.log(response);
  })

  return (
    <div>
    </div>
  );
}

export default App;
