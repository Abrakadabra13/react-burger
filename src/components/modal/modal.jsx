import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import styles from '../modal/modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

// const Modal = (props) => {
//   const modalRoot = document.getElementById('modal')

//   return createPortal(
//     <ModalOverlay close={props.close}>
//       <div className={styles.modal}>
//         <ModalHeader close={props.close} header={props.header} />
//         {props.children}
//       </div>
//     </ModalOverlay>,
//     modalRoot
//   );
// };
const modalRoot = document.querySelector('#modal')
const Modal = (props) => {
  // const modalRoot = document.getElementById('modal')
  // const [visible, setVisible] = useState(true);

//   const openModal = () => {
//     setVisible(true);
// };

const element = useMemo(() => document.createElement('div'), []);
    useEffect(() => {
      modalRoot.appendChild(element);
        return() => {
          modalRoot.removeChild(element)
    }
    });

    return (
    <>
     <ModalOverlay />
      <div className={styles.modal}>
        <CloseIcon type="primary" className={styles.cross} />
        <h2 className='text text_type_digits-large pt-30 pb-8'>034536</h2>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={styles.image}>
          <img src='../../images/done.jpg' alt='Заказ готовится'/>
        </div>
        <p className='text text_type_main-small pt-15 pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive pb-30'>Дождитесь готовности на орбитальной станции</p>
      </div>
    </>
    )
  // return ReactDOM.createPortal(

    // <ModalOverlay>
    //   <div className={styles.modal}>
    //     <h2 className='text text_type_digits-large'>034536</h2>
    //   </div>
    // </ModalOverlay>,
  //   <div className={styles.modal}>
  //     <h2 className='text text_type_digits-large'>034536</h2>
  //   </div>,
  //   modalRoot
  // )
}

export default Modal;
