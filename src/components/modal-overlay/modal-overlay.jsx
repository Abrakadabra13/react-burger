import styles from "../modal-overlay/modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ closeModal }) => {
  return (
    <div className={styles.overlay} onClick={closeModal}></div>
  );
};

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalOverlay;
