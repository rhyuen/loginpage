import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextInput from "./FormTextInput.jsx";

export default ({
  onFormSubmit,
  onInputChange,
  usernameValue,
  passwordValue
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <TextInput
          type="text"
          placeholder="Username"
          name="username"
          onChange={onInputChange}
          value={usernameValue}
        />
      </div>
      <div>
        <TextInput
          type="text"
          placeholder="Password"
          name="password"
          onChange={onInputChange}
          value={passwordValue}
        />
      </div>
      <div>
        Not a user yet? Sign up <Link to="/signup">here</Link>.
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};
