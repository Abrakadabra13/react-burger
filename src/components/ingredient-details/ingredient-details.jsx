import styles from "../ingredient-details/ingredient-details.module.css";
import PropTypes from "prop-types";

const IngredientDetails = ({ currentElement }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <img src={currentElement.image_large} alt={currentElement.name} />
      <p className="text text_type_main-medium mb-8 mt-4">
        {currentElement.name}
      </p>
      <div className={styles.box}>
        <div className={styles.calories}>
          <p className="text text_type_main-small text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentElement.calories}
          </p>
        </div>
        <div className={styles.item}>
          <p className="text text_type_main-small text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentElement.proteins}
          </p>
        </div>
        <div className={styles.item}>
          <p className="text text_type_main-small text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentElement.fat}
          </p>
        </div>
        <div className={styles.item}>
          <p className="text text_type_main-small text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentElement.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  currentElement: PropTypes.shape({
    name: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngredientDetails;
