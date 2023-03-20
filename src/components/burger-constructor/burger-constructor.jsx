import styles from '../burger-constructor/burger-constructor.module.css';
import { data } from '../../utils/data';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';

const BurgerConstructor = (props) => {
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
      </ul>
      <Info />
    </section>
  )
}

const Info = (props) => {
  return(
    <div className={ styles.info }>
      <div className={ styles.price }>
      <p className="text text_type_digits-medium">610<CurrencyIcon type="primary" /></p>
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

Items.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default BurgerConstructor;


