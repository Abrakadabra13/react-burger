import React from 'react';
import styles from '../burger-ingredients/burger-ingredients.module.css';
import { CurrencyIcon, Tab, Counter  } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState('bun');

  return (
    <section className={ styles.ingredients }>
      <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
      <div className={ styles.tabs }>
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
      <div className={ styles.scroll }>
        <h2 className='text text_type_main-medium pb-6'>Булки</h2>
        <div className={ styles.stuff }>
          {props.data.map((obj) => {
            if (obj.type === 'bun') {
              return (
              <IngredientList key = { obj._id } { ...obj } />
          )}
          })}
        </div>
        <h2 className='text text_type_main-medium pt-10 pb-6'>Соусы</h2>
        <div className={ styles.stuff }>
          {props.data.map((obj) => {
            if (obj.type === 'sauce') {
              return (
              <IngredientList key = { obj._id } { ...obj } />
          )}
          })}
        </div>
        <h2 className='text text_type_main-medium pt-10 pb-6'>Начинки</h2>
        <div className={ styles.stuff }>
          {props.data.map((obj) => {
            if (obj.type === 'main') {
              return (
              <IngredientList key = { obj._id } { ...obj } />
          )}
          })}
        </div>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.array,
};

const IngredientList = (props) => {
  return (
    <div className={ styles.container }>
      {props.count >= 1 && <Counter count={ props.count } size="default" extraClass="m-1" />}
      <img src={ props.image } alt= { props.name } />
      <div className={ styles.price }>
        <p className='text text_type_digits-default'>{ props.price }</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className='text text text_type_main-small'>{ props.name }</p>
    </div>
  )}

  IngredientList.propTypes = {
    price: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  };

export default BurgerIngredients;
