import { Overlay, ModalImg, ModalPic } from './Modal.styled';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const modalWindow = document.querySelector('#modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscModal);
  }

  onEscModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  onBackClose = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onBackClose}>
        <ModalImg>
          <ModalPic src={this.props.src} alt="Рисунок в модалке" />
        </ModalImg>
      </Overlay>,
      modalWindow
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
