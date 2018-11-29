import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import validator from "validator";
import TextInput from "./FormTextInput.jsx";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal.jsx";

class Forgot extends Component {
  state = {
    email: "",
    isInvalidEmail: false,
    isEmailConfirmationVisible: false
  };

  handleChange = e => {
    const currentValue = e.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        email: currentValue
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!validator.isEmail(this.state.email)) {
      return this.setState({ isInvalidEmail: true });
    }
    this.setState(prevState => {
      return {
        ...prevState,
        email: "",
        isEmailConfirmationVisible: true
      };
    });
  };

  handleModalClose = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isEmailConfirmationVisible: false
      };
    });
  };

  render() {
    return (
      <Card>
        {this.state.isEmailConfirmationVisible ? (
          <Modal>
            <h1>An email with directions on what to do will arrive shortly.</h1>
            <button onClick={this.handleModalClose}>Close</button>
            <Link to="/">Go back to login</Link>
          </Modal>
        ) : null}
        {this.state.isInvalidEmail ? <h1>invalid email</h1> : null}
        <h1>Account Recovery</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            type="text"
            placeholder="Enter your email address."
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div>
          I had an <Link to="/">epiphany</Link> (I remembered my credentials).
        </div>
      </Card>
    );
  }
}

export default Forgot;
