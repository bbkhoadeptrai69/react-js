import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    render() {
        axios.post('http://api.local/login', {
            params: {
                username: "admin",
                password: "123"
            },
            responseType: 'json'
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
        return (
            <div>
                <h1>Login vào đây</h1>     
            </div>
        );
    }
}

export default Login;