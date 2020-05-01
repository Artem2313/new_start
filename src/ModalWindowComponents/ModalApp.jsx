import React, { Component } from 'react';
import Modal from './Modal';

export default class ModalApp extends Component {
  state = { isModalOpen: false };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open</button>

        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h1>Modal Content</h1>
            <p>
              In user interface design for computer applications, a modal window
              is a graphical control element subordinate to an application's
              main window. It creates a mode that disables the main window but
              keeps it visible, with the modal window as a child window in front
              of it. Users must interact with the modal window before they can
              return to the parent application. This avoids interrupting the
              workflow on the main window. Modal windows are sometimes called
              heavy windows or modal dialogs because they often display a dialog
              box.
            </p>
            <button onClick={this.closeModal}>Close Modal</button>
          </Modal>
        )}
      </div>
    );
  }
}
