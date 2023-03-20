import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../modal/modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const modalRoot = document.querySelector('#modal')
const Modal = (props) => {

const [visible, setVisible] = useState(true);
const onClose= () => {
  setVisible(false);
};

const element = useMemo(() => document.createElement('div'), []);

useEffect(() => {
  if (visible) {
    modalRoot.appendChild(element);
      return() => {
        modalRoot.removeChild(element)
    }
   }}
  )

  if (visible) {
    return createPortal(
      (
      <>
      <ModalOverlay />
      <div className={styles.modal}>
        <button className={styles.cross} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        <h2 className='text text_type_digits-large pt-30 pb-8'>034536</h2>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={styles.image}>
          <img src={'../../images/done.jpg'} alt='Заказ готовится'/>
        </div>
        <p className='text text_type_main-small pt-15 pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive pb-30'>Дождитесь готовности на орбитальной станции</p>
      </div>
      </>
      ), element)
  } else {

    return null;
  }

}

export default Modal;

const OrderDetails = (props) => {
  const [visible, setVisible] = useState(false);

  return (
   <>
     {/* <ModalOverlay />
      <div className={styles.modal}>
        <button className={styles.cross} onClick={() => setVisible(false)}>
          <CloseIcon type="primary" />
        </button>
        <h2 className='text text_type_digits-large pt-30 pb-8'>034536</h2>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={styles.image}>
          <img src={'../../images/done.jpg'} alt='Заказ готовится'/>
        </div>
        <p className='text text_type_main-small pt-15 pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive pb-30'>Дождитесь готовности на орбитальной станции</p>
      </div> */}
    </>
  )
}


