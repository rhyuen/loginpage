import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    isPasswordValid: false,
    isPasswordMatch: false,
    isPasswordVisible: false
  };

  handleInputChange = name => e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: e.currentTarget.value
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = "";
    const signupDetails = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(url, signupDetails)
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleInputChange("username")}
            value={this.state.username}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password."
            name="password"
            onChange={this.handleInputChange("password")}
            value={this.state.password}
          />
          <br />
          <input
            type="password"
            placeholder="Retype your password."
            name="passwordConfirmation"
            onChange={this.handleInputChange("passwordConfirmation")}
            value={this.state.passwordConfirmation}
          />
          <br />
          <div>Use at least 16 characters.</div>
          <input type="submit" value="Signup" />
        </form>
        <div>
          Already have an account? Login <Link to="/">here</Link>.
        </div>
      </div>
    );
  }
}

export default Signup;
