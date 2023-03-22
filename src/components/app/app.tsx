import React, { useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header.jsx";
import { url } from "../../utils/data";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

function App() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      return await fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((data) => setData(data.data))
        .catch((err) => console.log("Ошибка. Запрос не выполнен: ", err));
    };
    getData();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
