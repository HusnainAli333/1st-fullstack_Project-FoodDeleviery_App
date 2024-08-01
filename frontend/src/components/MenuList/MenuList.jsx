import { menuList } from "../../utils/menuList";
import "./MenuList.css";

function MenuList() {
  return (
    <section className="explore-menu">
      <h1>Explore Our Menu</h1>
      <p>
        Choose from a diverse menu featureing a delectable array of dishes.Our
        mission is to satisfy Your cravings and elevate your dining expercince
      </p>
      <div className="explore-menu-list">
        {menuList.map((item, index) => {
          return (
            <div key={index} className="menu-list-item">
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MenuList;
