import React from 'react';
import styles from '../burger-constructor/burger-constructor.module.css';
import { data } from '../../utils/data';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = () => {
  return (
    <section className={ styles.components }>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <li className={ styles.locked }>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
          </li>
          <ul className={ styles.scroll }>
            {data.map((obj) => {
              if (obj.count > 0 && obj.isLocked !== "true") {

                return(
                <Items key = { obj._id } { ...obj }/>
            )}
            })}
          </ul>
        <li className={ styles.locked }>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li>
        {/* <li className={ styles.locked }>
        <ConstructorElement
          text="Говяжий метеорит (отбивная)"
          price={300}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-04.png"}
        />
        </li>
        <li className={ styles.locked }>
        <ConstructorElement
          text="Биокотлета из марсианской Магнолии"
          price={424}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-01.png"}
        />
        </li>
        <li className={ styles.locked }>
        <ConstructorElement
          text="Кристаллы марсианских альфа-сахаридов"
          price={762}
          thumbnail={"https://code.s3.yandex.net/react/code/core.png"}
        />
        </li>
        <li className={ styles.locked }>
        <ConstructorElement
          text="Мини-салат Экзо-Плантаго"
          price={30}
          thumbnail={"https://code.s3.yandex.net/react/code/salad.png"}
        />
        </li>
        <li className={ styles.locked }>
        <ConstructorElement
          text="Филе Люминесцентного тетраодонтимформа"
          price={988}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
        />
        </li>
        <li className={ styles.locked }>
        <ConstructorElement
          text="Сыр с астероидной плесенью"
          price={4142}
          thumb
          thumbnail={"https://code.s3.yandex.net/react/code/cheese.png"}
        />
        </li> */}
      </ul>
      <Info />
    </section>
  )
}


const Info = () => {
  return(
    <div className={ styles.info }>
      <div className={ styles.price }>
      <p className="text text_type_digits-medium">610 <CurrencyIcon type="primary" /></p>
      </div>
      <Button htmlType="button" type="primary" size="medium">Оформить заказ</Button>
    </div>
  )
}

const Items = (props) => {
  return (
    <li className={ styles.box }>
              <DragIcon type="primary" />
              <ConstructorElement
                text= { props.name }
                price={ props.price }
                thumbnail={ props.image }
              />
            </li>
  )
}

export default BurgerConstructor;
