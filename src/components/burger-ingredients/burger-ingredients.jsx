import React, { useState, useContext } from "react";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import {
  CurrencyIcon,
  Tab,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { BurgerContext } from "../../utils/BurgerContext";

const BurgerIngredients = () => {
  const data = useContext(BurgerContext);

  const [current, setCurrent] = useState("bun");
  const [visible, setVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

  const openModal = (element) => {
    setVisible(true);
    setCurrentIngredient(element);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <section className={styles.ingredients}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.scroll}>
        <h2 className="text text_type_main-medium pb-6">Булки</h2>
        <div className={styles.stuff}>
          {data.map((obj) => {
            if (obj.type === "bun") {
              return (
                <IngredientList
                  key={obj._id}
                  {...obj}
                  openModal={() => openModal(obj)}
                />
              );
            }
          })}
        </div>
        <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
        <div className={styles.stuff}>
          {data.map((obj) => {
            if (obj.type === "sauce") {
              return (
                <IngredientList
                  key={obj._id}
                  {...obj}
                  openModal={() => openModal(obj)}
                />
              );
            }
          })}
        </div>
        <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
        <div className={styles.stuff}>
          {data.map((obj) => {
            if (obj.type === "main") {
              return (
                <IngredientList
                  key={obj._id}
                  {...obj}
                  openModal={() => openModal(obj)}
                />
              );
            }
          })}
        </div>
      </div>
      {visible && (
        <Modal closeModal={closeModal}>
          <IngredientDetails currentElement={currentIngredient} />
        </Modal>
      )}
    </section>
  );
};

// BurgerIngredients.propTypes = {
//   data: PropTypes.array.isRequired,
// };

const IngredientList = ({ count, price, name, image, openModal }) => {
  return (
    <div className={styles.container} onClick={openModal}>
      {count >= 1 && <Counter count={count} size="default" extraClass="m-1" />}
      <img src={image} alt={name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text text_type_main-small">{name}</p>
    </div>
  );
};

IngredientList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;
