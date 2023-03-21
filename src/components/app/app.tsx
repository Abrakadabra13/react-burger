import React, { useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import { url } from '../../utils/data';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import Modal from '../modal/modal';
// import Modal from "../modal/modal";
// import ModalOverlay from "../modal-overlay/modal-overlay";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasError, setHasError] = useState(false);
  // const [visible, setVisible] = useState(true);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const getData = async() => {
      return await fetch(url)
        .then((res) => {
          if(res.ok) {
            return res.json()
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((data) => setData(data.data))
        .catch((err) => console.log('Ошибка. Запрос не выполнен: ', err))
  }
  getData();
  }, []);

  return (
    <div className={ styles.app }>
      <AppHeader />
      <main>
        <BurgerIngredients data = {data}/>
        <BurgerConstructor data = {data}/>
        {/* <Modal modal='modal' visible={visible} onClose={() => setVisible(false)} /> */}
        {/* <Modal visible={visible}/> */}
      </main>
    </div>
  );
}

export default App;
