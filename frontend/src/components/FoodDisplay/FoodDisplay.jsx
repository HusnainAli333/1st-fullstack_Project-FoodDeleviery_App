import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../../context/ContextProvider";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

function FoodDisplay() {
  const { foodList } = useAppContext();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const FoodFilter =
    category === "all"
      ? foodList
      : foodList.filter((item) => item.category === category);

  return (
    <section className="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {FoodFilter.map((food) => {
          return <FoodItem food={food} key={food._id} category={category} />;
        })}
      </div>
    </section>
  );
}

export default FoodDisplay;
