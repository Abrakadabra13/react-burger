import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "../modal/modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.querySelector("#modal");

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
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
      <ModalOverlay closeModal={closeModal} />
      <div className={styles.modal} onClick={(evt) => evt.stopPropagation()}>
        <button className={styles.cross} type="button" onClick={closeModal}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
