import React, { Component } from 'react';

class Component2_1_1 extends Component {
    constructor(props) {
        super(props);
    }

    isChanged = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        });
    } 

    editClick = (value) => {
        this.props.editValue(value);
    }

    render() {
        return (
            <div className="jumbotron bg-light">
                <h5>This is Component 2_1_1</h5>
                <div className="form-inline">
                    <input className="form-control" type="text" name="txtValue" onChange={(event) => this.isChanged(event)}/>
                    <button className="btn btn-outline-warning" onClick={() => this.editClick(this.state.txtValue)}>Edit</button>
                </div>
            </div>
        );
    }
}

export default Component2_1_1;