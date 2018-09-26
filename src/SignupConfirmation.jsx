import React from "react";
import styled from "styled-components";

const Viewer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

const SignupConfirmation = () => {
  return <Viewer>SignupConfirmation</Viewer>;
};

export default SignupConfirmation;
