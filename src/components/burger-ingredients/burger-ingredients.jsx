import React from 'react';
import styles from '../burger-ingredients/burger-ingredients.module.css';
import { data } from '../../App';
import { CurrencyIcon, Tab, Counter  } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('bun');

  return (
    <section className={ styles.ingredients }>
      <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
        Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
        Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
        Начинки
        </Tab>
       </div>
      <div className='scroll'>
        <h2 className='text text_type_main-medium pt-10 pb-6'>Булки</h2>
        <div className={ styles.stuff }>
          <BurgerElement />
        </div>
          <h2 className='text text_type_main-medium pt-10 pb-6'>Соусы</h2>
          <div className={ styles.stuff }>
          <SauseElement />
        </div>
      </div>
    </section>
  )
}

const BurgerElement = () => {
  return (
    data.map((obj) => {
        if(obj.type === 'bun') {
        return (
          <div className={ styles.container }>
            {obj.count >= 1 && <Counter count={ obj.count } size="default" extraClass="m-1" />}
            <img src={ obj.image } />
            <div className={ styles.price }>
              <p className='text text_type_digits-default'>20</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className='text text text_type_main-small'>{ obj.name }</p>
        </div>

    )}
  })
)}

const SauseElement = () => {
  return (
    data.map((obj) => {
        if(obj.type === 'sauce') {
        return (
          <div className={ styles.container }>
            {obj.count >= 1 && <Counter count={ obj.count } size="default" extraClass="m-1" />}
            <img src={ obj.image } />
            <div className={ styles.price }>
              <p className='text text_type_digits-default'>30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className='text text text_type_main-small'>{ obj.name }</p>
        </div>

    )}
  })
)}

export default BurgerIngredients;
