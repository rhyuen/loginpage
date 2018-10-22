import React, { Component } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      <ModalStyle>{this.props.children}</ModalStyle>,
      this.el
    );
  }
}

export default Modal;

const ModalStyle = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
