import { useState } from "react";
import { icons } from "../../utils/icons";
import "./Counter.css";
import { useAppContext } from "../../context/ContextProvider";
function Counter({ food }) {
  const [count, setCount] = useState(0);
  const { addToCart, increaseQuantity, decreaseQuantity } = useAppContext();

  return (
    <>
      {!count ? (
        <img
          className="add"
          src={icons.add_icon_white}
          alt="adding to cart"
          onClick={() => {
            setCount((c) => c + 1);
            return addToCart(food);
          }}
        />
      ) : (
        <div className="food-item-counter">
          <img
            src={icons.remove_icon_red}
            alt="decrease quantity"
            onClick={() => {
              setCount((c) => c - 1);
              return decreaseQuantity(food._id);
            }}
          />
          <p>{count}</p>
          <img
            src={icons.add_icon_green}
            alt="increse quantity"
            onClick={() => {
              setCount((c) => c + 1);
              return increaseQuantity(food._id);
            }}
          />
        </div>
      )}
    </>
  );
}

export default Counter;
