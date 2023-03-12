import styles from '../app-header/app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader(props) {
  return (
    <header className={ styles.header }>
      <div className={ styles.content }>
        <div className={ styles.order }>
          <div className={ styles.constructor }>
            <BurgerIcon type="primary" />
            <p className="text text text_type_main-small">Конструктор</p>
          </div>
          <div className={ styles.constructor }>
            <ListIcon type="secondary" />
          <p className="text text text_type_main-small text_color_inactive">Лента Заказов</p>
          </div>
        </div>
        <Logo />
        <div className={ styles.constructor }>
          <ProfileIcon type="secondary" />
          <p className="text text text_type_main-small text_color_inactive">Личный кабинет</p>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;
