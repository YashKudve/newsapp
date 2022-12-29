//using rcep we get proptypes
import React, { Component } from 'react'
import {BrowserRouter as Link} from "react-router-dom";
// import PropTypes from 'prop-types'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a href="navbar-brand" to="#">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="nav-link active" aria-current="page" to="/Home">Home</a>
                                </li>
                                {/* <li className="nav-item"> <a href="nav-link" to="/About">About Us</a> </li> */}
                                <li className="nav-item"> <a href="nav-link" to="/Business">Business</a> </li>
                                <li className="nav-item"> <a href="nav-link" to="/Entertainment">Entertainment</a> </li>
                                <li className="nav-item"> <a href="nav-link" to="/General">General</a> </li>
                                <li className="nav-item"> <a href="nav-link" to="/Health">Health</a> </li>
                                <li className="nav-item"> <a href="nav-link" to="/Science">Science</a> </li>
                                <li className="nav-item"> <a href="nav-link" to="/Sports">Sports</a> </li>
                                <li className="nav-item"> <a href="nav-link" to="/Technology">Technology</a> </li>

                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
