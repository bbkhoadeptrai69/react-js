import React, { Component } from 'react';
import {connect} from 'react-redux';

class Component2_1_1 extends Component {
    constructor(props) {
        super(props);
    }
    
    // editClick = () => {
    //     var {dispatch} = this.props;
    //     dispatch({
    //         type: "CHANGE_VALUE",
    //         newValue: this.state.txtValue
    //     })
    // }

    isChanged = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className="jumbotron bg-light">
                <h5>This is Component 2_1_1</h5>
                <div className="form-inline">
                    <input className="form-control" type="text" name="txtValue" onChange={(event) => this.isChanged(event)}/>
                    <button className="btn btn-outline-warning" onClick={() => this.props.editClick(this.state.txtValue)}>Edit</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editClick: (value) => {
            dispatch({
                type: "CHANGE_VALUE",
                newValue: value
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component2_1_1);