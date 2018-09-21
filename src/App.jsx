import React, {Component} from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import Form from "./Form.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Forgot from "./Forgot.jsx";

const App = () => {    
    return (
        <div className = "root">
            <Router>
                <div>  
                    <h1>hi, guise.  Cats are the best</h1>                      
                    <Route exact path = "/" component = {Login}/>
                    <Route exact path = "/signup" component = {Signup}/>
                    <Route exact path = "/forgot" component = {Forgot}/>
                </div>
            </Router>
        </div>
    );    
};

export default App;