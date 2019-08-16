import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                        <button className="btn btn-danger" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        </button>
                        </a>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/product">Product <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category">Category </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/user">User </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Header;