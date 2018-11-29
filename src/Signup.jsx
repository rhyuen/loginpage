import React, { Component } from "react";
import Card from "./Card.jsx";
import FormButton from "./FormButton.jsx";
import TextInput from "./FormTextInput.jsx";
import InfoText from "./InfoText.jsx";
import Modal from "./Modal.jsx";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink.jsx";
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
      <Card>
        {this.state.isUsernameDoubleVisible ? (
          <Modal>
            <h1>That Username is already taken.</h1>
            <button onClick={this.handleModalClose}>Close</button>
          </Modal>
        ) : null}

        {this.state.isConfirmationVisible ? (
          <Modal>
            <h1>Your account has been created.</h1>
            <button onClick={this.handleModalClose}>Close</button>
            <h2>
              Click <Link to="/">here</Link> to login.
            </h2>
          </Modal>
        ) : null}

        <div>
          <h1>Signup</h1>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              type="text"
              placeholder="Enter your preferred username."
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
            <br />
            <TextInput
              type={isPasswordVisible}
              placeholder="Enter your password."
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            <br />
            <TextInput
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
            <InfoText>
              Use at least <strong>8 characters</strong>.
            </InfoText>
            <FormButton
              type="submit"
              value="Signup"
              disabled={!isSubmitValid}
              onClick={this.handleSubmit}
            />
          </form>
          <InfoText>
            Already have an account? Login <StyledLink to="/">here</StyledLink>.
          </InfoText>
        </div>
      </Card>
    );
  }
}

export default Signup;
