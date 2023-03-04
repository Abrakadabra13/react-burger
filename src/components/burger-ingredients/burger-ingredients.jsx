import styles from '../burger-ingredients/burger-ingredients.module.css';


function BurgerIngredients() {


  return (
    <section className={ styles.ingredients }>
      <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
      <div className={ styles.tab }>
        <div className= { styles.box } value="bun">
          <p className='text text text_type_main-small'>Булки</p>
        </div>
        <div className={ styles.box } value="sauce">
         <p className='text text text_type_main-small'>Соусы</p>
        </div>
        <div className={ styles.box } value="main">
          <p className='text text text_type_main-small'>Начинки</p>
        </div>
      </div>
    </section>
  )
}

// function Tab() {




    // const [{current === 'bun'}, setCurrent] = React.useState('bun')
    // return (
      // <div style={{ display: 'flex' }}>
      //   <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
      //     Булки
      //   </Tab>
      //   <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
      //     Соусы
      //   </Tab>
      //   <Tab value="main" active={current === 'main'} onClick={setCurrent}>
      //     Начинки
      //   </Tab>
      // </div>
    // )
    // }


export default BurgerIngredients;
