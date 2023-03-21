import styles from "../order-details/order-details.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = ({closeModal}) => {
  return (
   <>
      <div className={styles.modal}>
        {/* <button className={styles.cross} type="button" onClick={closeModal}><CloseIcon type="primary"/></button> */}
        <h2 className='text text_type_digits-large pt-30 pb-8'>034536</h2>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <div className={styles.image}></div>
        <p className='text text_type_main-default pt-15 pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive pb-30'>Дождитесь готовности на орбитальной станции</p>
      </div>
    </>
  )
}

export default OrderDetails;
