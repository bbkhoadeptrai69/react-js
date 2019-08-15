import React, { Component } from 'react';
import Component2_1 from './Component2_1';

class Component2 extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">This is Component 2</h1>
                <div className="row">
                     <div className="col-12">
                        <Component2_1 editValue={(value) => this.props.editValue(value)}/>
                     </div>
                </div>
                
            </div>
        );
    }
}

export default Component2;