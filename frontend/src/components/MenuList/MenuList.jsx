import { useSearchParams } from "react-router-dom";
import { menuList } from "../../utils/menuList";
import "./MenuList.css";

function MenuList({ handleParms }) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  return (
    <section className="explore-menu" id="#explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-p">
        Choose from a diverse menu featureing a delectable array of dishes.Our
        mission is to satisfy Your cravings and elevate your dining expercince
      </p>
      <div className="explore-menu-list">
        {menuList.map((item, index) => {
          return (
            <MenuListItem
              item={item}
              key={index}
              handleParms={handleParms}
              category={category}
            />
          );
        })}
      </div>
      <hr />
    </section>
  );
}
function MenuListItem({ item, handleParms, category }) {
  const { menu_image, menu_name } = item;

  return (
    <div
      onClick={() => {
        const menuName = category === menu_name ? "all" : menu_name;
        return handleParms(menuName);
      }}
      className="menu-list-item"
    >
      <img
        className={category === menu_name ? "menu-item-active" : ""}
        src={menu_image}
        alt={menu_name}
      />
      <p>{menu_name}</p>
    </div>
  );
}
export default MenuList;
