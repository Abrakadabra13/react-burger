import styles from '../burger-constructor/burger-constructor.module.css';
import { data } from '../../utils/data';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details'

const BurgerConstructor = (props) => {
  const bunLocked = data.filter((item) => item.name === 'Краторная булка N-200i');

  const [visible, setVisible] = useState(false);

  // const openModal = () => {
  //   setVisible(true);
  // };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <section className={ styles.components }>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <li className={ styles.locked }>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunLocked[0].name + ' (верх)'}
          price={bunLocked[0].price}
          thumbnail={bunLocked[0].image}
        />
          </li>
          <ul className={ styles.scroll }>
            {data.map((obj) => {
              if (obj.count > 0 && obj.isLocked !== "true") {
            //     return(
            //     <Items key = { obj._id } { ...obj }/>
            // )
            return (
              <li key={obj._id} className={styles.box}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={obj.name}
                  price={obj.price}
                  thumbnail={obj.image}
                />
              </li>
            )}
            })}
          </ul>
        <li className={ styles.locked }>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunLocked[0].name + ' (низ)'}
            price={bunLocked[0].price}
            thumbnail={bunLocked[0].image}
          />
        </li>
      </ul>
      <div className={ styles.info }>
      <div className={ styles.price }>
      <p className="text text_type_digits-medium">610</p>
      <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="medium" onClick={() => setVisible(true)}>Оформить заказ</Button>
    </div>
    {visible && (
      <Modal closeModal={closeModal}>
        <OrderDetails />
      </Modal>
        )}
    </section>
  )
}

// const Items = (props) => {
//   return (
//     <li className={ styles.box }>
//               <DragIcon type="primary" />
//               <ConstructorElement
//                 text= { props.name }
//                 price={ props.price }
//                 thumbnail={ props.image }
//               />
//             </li>
//   )
// }

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
}

export default BurgerConstructor;


