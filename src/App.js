import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
// import {
//   BrowserRouter as Route,
//   Routes,
//   Router
// } from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <News />
        {/* <Router>
            <Routes>
            <News pageSize={8} country="in" category="science" api="f51b85f43b93401cab0d0488163f8f43"/>
            <Route exact path="/"><News pageSize={8} country="in" category="General" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route exact path="/Business"><News pageSize={8} country="in" category="Business" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route exact path="/Entertainment"><News pageSize={8} country="in" category="Entertainment" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route exact path="/General"><News pageSize={8} country="in" category="General" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route exact path="/Health"><News pageSize={8} country="in" category="Health" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route exact path="/Science"><News pageSize={8} country="in" category="Science" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route exact path="/Sports"><News pageSize={8} country="in" category="Sports" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route exact path="/Technology"><News pageSize={8} country="in" category="Technology" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              <Route path="/about"><News pageSize={8} country="in" category="science" api="f51b85f43b93401cab0d0488163f8f43"/> </Route>
              
            </Routes>
        
        </Router> */}
      </div>
    )
  }
}
