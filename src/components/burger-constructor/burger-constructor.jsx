import styles from "../burger-constructor/burger-constructor.module.css";
import {
  DragIcon,
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrders } from "../../utils/burger-api";
import { useState, useContext } from "react";
import { BurgerContext } from "../../utils/BurgerContext";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = () => {
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState();
  const data = useContext(BurgerContext);

  const getId = () => {
    const ingridientId = [];
    data.forEach((item) => {
      ingridientId.push(item?._id);
    });
    return ingridientId;
  };
  const getNumber = async () => {
    return await getOrders({ getId }).then((data) =>
      setNumber(data.order.number)
    );
  };

  const bunOrder = 0;

  const totalPrice = () => {
    let buns = [];
    let price = 0;

    data.forEach((el) => {
      if (el.type === "bun") {
        buns.push(el.price);
      } else {
        price += el.price;
      }
    });
    const result = price + buns[bunOrder] * 2;
    return result.toString();
  };

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
          <p className="text text_type_digits-medium">{totalPrice()}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={() => {
            openModal();
            getNumber();
          }}
        >
          Оформить заказ
        </Button>
      </div>
      {visible && (
        <Modal closeModal={closeModal}>
          <OrderDetails number={number} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
