import React, { Component } from 'react';

class Component1 extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                <h1 className="display-4">(WITHOUT REDUX)</h1>
                    <h1 className="display-4">This is Component 1</h1>
                    <p className="lead">a = {this.props.a}</p>
                </div>
            </div>
        );
    }
}

export default Component1;