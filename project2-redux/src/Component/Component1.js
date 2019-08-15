import React, { Component } from 'react';
import {connect} from 'react-redux';

class Component1 extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">(REDUX)</h1>
                    <h1 className="display-4">This is Component 1 </h1>
                    <p className="lead">a = {this.props.a}</p>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        a: state.a
    }
}
export default connect(mapStateToProps)(Component1);