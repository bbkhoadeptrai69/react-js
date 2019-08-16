import React, { Component } from 'react';
import Product from './Product';
import Category from './Category';
import Redirect from '../router/Redirect';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <Redirect />
            </div>
        );
    }
}

export default Content;