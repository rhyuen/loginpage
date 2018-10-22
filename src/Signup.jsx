import React, { Component } from "react";
import styled from "styled-components";
import Confirmation from "./SignupConfirmation.jsx";
import Modal from "./Modal.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    isPasswordValid: false,
    isPasswordMatch: false,
    isPasswordVisible: false,
    isConfirmationVisible: false,
    isUsernameDoubleVisible: false
  };

  handleInputChange = e => {
    let currInputValue = e.currentTarget.value;
    let currInputName = e.currentTarget.name;
    this.setState(prevState => {
      let change = {};
      switch (currInputName) {
        case "username":
          change = { username: currInputValue };
          break;
        case "password":
          change = { password: currInputValue };
          break;
        case "passwordConfirmation":
          change = { passwordConfirmation: currInputValue };
          break;
      }
      return Object.assign(prevState, change);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:5789/signup";
    const signupDetails = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(url, signupDetails)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status === 201) {
          this.setState(prevState => {
            return {
              ...prevState,
              username: "",
              password: "",
              passwordConfirmation: "",
              isConfirmationVisible: true
            };
          });
        }
      })
      .catch(err => {
        console.log(err.response.data);
        if (err.response.status === 400) {
          this.setState(prevState => {
            return {
              ...prevState,
              username: "",
              isUsernameDoubleVisible: true
            };
          });
        }
      });
  };

  handlePasswordVisibleClick = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isPasswordVisible: !prevState.isPasswordVisible
      };
    });
  };

  isFormSubmitValid = () => {
    const characterMin = 8;
    const { username, password, passwordConfirmation } = this.state;
    if (username === "" || password === "" || passwordConfirmation === "") {
      return false;
    } else if (
      password.length < characterMin ||
      passwordConfirmation < characterMin
    ) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  handleModalClose = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isUsernameDoubleVisible: false,
        isConfirmationVisible: false
      };
    });
  };

  render() {
    const isPasswordVisible = this.state.isPasswordVisible
      ? "text"
      : "password";

    const isSubmitValid = this.isFormSubmitValid();

    return (
      <div>
        {this.state.isUsernameDoubleVisible ? (
          <Modal>
            <h1>That Username is already taken.</h1>
            <button onClick={this.handleModalClose}>Close</button>
          </Modal>
        ) : null}
        {this.state.isConfirmationVisible ? (
          <Modal>
            <h1>Your account has been created. Click here to login.</h1>
            <button onClick={this.handleModalClose}>Close</button>
          </Modal>
        ) : null}
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
            <br />
            <input
              type={isPasswordVisible}
              placeholder="Enter your password."
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            <br />
            <input
              type={isPasswordVisible}
              placeholder="Retype your password."
              name="passwordConfirmation"
              onChange={this.handleInputChange}
              value={this.state.passwordConfirmation}
            />
            <span>
              <label htmlFor="passwordVisible">
                <input
                  type="checkbox"
                  id="passwordVisible"
                  onClick={this.handlePasswordVisibleClick}
                />
                Password Visible
              </label>
            </span>
            <br />
            <div>Use at least 8 characters.</div>
            <button
              type="submit"
              disabled={!isSubmitValid}
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
          <div>
            Already have an account? Login <Link to="/">here</Link>.
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
