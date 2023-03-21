import { useEffect, useMemo, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '../modal/modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const Modal = ({children, closeModal}) => {
const modalRoot = document.querySelector('#modal')
const [visible, setVisible] = useState(false);

const element = useMemo(() => document.createElement('div'), []);

useEffect(() => {
  if (visible) {
    modalRoot.appendChild(element);
      return() => {
        modalRoot.removeChild(element)
    }
   }

  const handleEscape = (evt) => {
  if (evt.key === "Escape") {
    console.log('Press Esc');
    closeModal();
  }
};

document.addEventListener("keydown", handleEscape);
return () => {
  document.removeEventListener("keydown", handleEscape);
};
}, []);

    return createPortal(
      <>
      <ModalOverlay closeModal={closeModal}> </ModalOverlay>
        <div className={styles.modal} onClick={(evt) => evt.stopPropagation()}>
          <button className={styles.cross} type="button" onClick={closeModal}><CloseIcon type="primary"/></button>
          {children}
        </div>
        </>,
      modalRoot
  );
}

export default Modal;




