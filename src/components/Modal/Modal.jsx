import { Overlay, ModalImg, ModalPic } from './Modal.styled';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalWindow = document.querySelector('#modal');

export function Modal({ src, closeModal }) {
  useEffect(() => {
    const onEscModal = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onEscModal);

    return () => {
      window.removeEventListener('keydown', onEscModal);
    };
  }, []);

  const onBackClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={onBackClose}>
      <ModalImg>
        <ModalPic src={src} alt="Рисунок в модалке" />
      </ModalImg>
    </Overlay>,
    modalWindow
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
