import "./FoodItem.css";
import { icons } from "../../utils/icons";
import Counter from "../Counter/Counter";

function FoodItem({ food }) {
  const { name, image, price, description } = food;
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} alt={description} />
        <Counter food={food} />
        <div className="food-item-info">
          <div className="food-item-rating">
            <p>{name}</p>
            <img src={icons.rating_starts} alt="rating star icon" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
