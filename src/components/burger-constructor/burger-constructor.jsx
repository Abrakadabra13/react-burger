import styles from "../burger-constructor/burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getData } from "../app/app"
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { BurgerContext } from "../../utils/BurgerContext";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

//import { url } from "../../utils/data";

// export const getOrders = ({getData}) => { // POST-запрос для получения номера заказа
//   return fetch(`${url}/orders`, {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       "ingredients": getData()
//     })
//   })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка ${res.status}`);
//   })
// };

const BurgerConstructor = () => {
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState(); // номер заказа
 // const [listIngredients, setListIngredients] = useState([]);
  const data = useContext(BurgerContext);

  // const getNumber = async () => {
  //   return await getOrders({getData})
  //   .then((data) => setNumber(data.order.number))
  //   .catch((err) => console.log(err));
  // }

  const IngridientId = [];
  data.forEach(item => {

    IngridientId.push(item?._id)

    return IngridientId;
  });


  const bunLocked = data.filter((item) => item.type === "bun");

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <section className={styles.components}>
      <ul className={styles.list}>
        <li className={styles.locked}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bunLocked[0]?.name + " (верх)"}
            price={bunLocked[0]?.price}
            thumbnail={bunLocked[0]?.image}
          />
        </li>
        <ul className={styles.scroll}>
          {data.map((obj) => {
            if (obj.count > 0 && obj.isLocked !== "true") {
              return (
                <li key={obj._id} className={styles.box}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={obj.name}
                    price={obj.price}
                    thumbnail={obj.image}
                  />
                </li>
              );
            }
          })}
        </ul>
        <li className={styles.locked}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunLocked[0]?.name + " (низ)"}
            price={bunLocked[0]?.price}
            thumbnail={bunLocked[0]?.image}
          />
        </li>
      </ul>
      <div className={styles.info}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={openModal}
        >
          Оформить заказ
        </Button>
      </div>
      {visible && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

// BurgerConstructor.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default BurgerConstructor;
