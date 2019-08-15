import React, { Component } from 'react';
import Component2_1_1 from './Component2_1_1';

class Component2_1 extends Component {
    render() {
        return (
            <div className="jumbotron bg-info">
                <h3>This is Component 2_1</h3>
                <div className="row">
                     <div className="col-12">
                        <Component2_1_1/>
                     </div>
                </div>
            </div>
        );
    }
}

export default Component2_1;
