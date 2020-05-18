import React, { Component, createRef } from 'react';
import styled from 'styled-components';

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWindow = styled.div`
  padding: 16px;
  max-width: 480px;
  width: 100%;
  min-height: 320px;
  background-color: #fff;
`;

/*
 **********************************
 * Component
 **********************************
 */
export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    return (
      <BackdropContainer
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <ModalWindow>{this.props.children}</ModalWindow>
      </BackdropContainer>
    );
  }
}
