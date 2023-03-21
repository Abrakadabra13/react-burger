import styles from "../order-details/order-details.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useState } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = (props) => {
  // const [visible, setVisible] = useState(false);

  return (
   <>

      <div className={styles.modal}>
        {/* <button className={styles.cross} onClick={() => setVisible(false)}>
          <CloseIcon type="primary" />
        </button> */}
        <h2 className='text text_type_digits-large pt-30 pb-8'>034536</h2>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={styles.image}>
          <img src={'../../images/done.jpg'} alt='Заказ готовится'/>
        </div>
        <p className='text text_type_main-small pt-15 pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive pb-30'>Дождитесь готовности на орбитальной станции</p>
      </div>
    </>
  )
}

export default OrderDetails;
