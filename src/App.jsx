import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Form from "./Form.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Forgot from "./Forgot.jsx";

const theme = {
  primaryColour: "#4842b7",
  inactiveColour: "rgba(0,0,0,0.1)",
  backgroundColour: "#F9F9F9"
};
const App = () => {
  return (
    <div className="root">
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgot" component={Forgot} />
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
