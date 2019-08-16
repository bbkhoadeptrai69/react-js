import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
let rs;
class Product extends Component {
    render() {
        
        axios.get('http://api.local/product', {
            
            responseType: 'json', // default
          })
          .then(function (response) {
            if(!response['data']){
                rs = false;
            }
            else
                rs = true;
          })
          .catch(function (error) {
            console.log(error);
          });
        
        
        return (
            <div>
                <h1>This is product component</h1>   
            </div>
            
        );
    }
}

export default Product;