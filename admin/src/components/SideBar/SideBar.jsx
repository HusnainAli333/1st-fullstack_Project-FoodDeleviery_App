import { NavLink } from "react-router-dom";
import { assets } from "../../utils/assets";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="add icon" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/" className="sidebar-option">
          <img src={assets.order_icon} alt="add icon" />
          <p>List items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="add icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
