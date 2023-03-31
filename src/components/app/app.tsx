import React, { useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header.jsx";
import { getIngredients } from "../../utils/data";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import { BurgerContext } from "../../utils/BurgerContext";

function App() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      return await getIngredients()
        .then((data) => setData(data.data))
        .catch((err) => console.log("Ошибка. Запрос не выполнен: ", err));
    };
    getData();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main>
        <BurgerContext.Provider value={data}>
          <BurgerIngredients />
          <BurgerConstructor />
        </BurgerContext.Provider>
      </main>
    </div>
  );
}

export default App;
