import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

class Forgot extends Component {
  state = {
    email: "",
    isConfirmationVisible: false
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
    this.setState(prevState => {
      return {
        ...prevState,
        email: ""
      };
    });
  };

  render() {
    return (
      <div>
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
