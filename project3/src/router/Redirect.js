import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Product from '../Component/Product';
import Category from '../Component/Category';
import Login from '../Component/Login';

class Redirect extends Component {
    render() {
        return (
            <div>
                <Route exact path='/product' component={Product} />
                <Route exact path='/category' component={Category} />
                <Route exact path='/login' component={Login} />
            </div>
        );
    }
}

export default Redirect;