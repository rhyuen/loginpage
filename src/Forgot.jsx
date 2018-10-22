import React, { Component } from "react";
import styled from "styled-components";
import validator from "validator";
import { Link } from "react-router-dom";
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
      this.setState({ isInvalidEmail: true });
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
      <div>
        {this.state.isEmailConfirmationVisible ? (
          <Modal>
            <h1>An email with directions on what to do will arrive shortly.</h1>
            <button onClick={this.handleModalClose}>Close</button>
          </Modal>
        ) : null}
        {this.state.isInvalidEmail ? <h1>invalid email</h1> : null}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="email address"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div>
          I had an <Link to="/">epiphany</Link>.
        </div>
        <div>
          TODO: Add email validation. TODO: You should ad a confirmation box
          here and redirect to the login page.
        </div>
      </div>
    );
  }
}

export default Forgot;
