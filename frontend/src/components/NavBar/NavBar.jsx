import { useState } from "react";
import { icons } from "../../utils/icons";
import "./NavBar.css";
function Header() {
  const [menu, setMenu] = useState("home");
  return (
    <div className="main-header">
      <img src={icons.logo} alt="icon of Logo" className="logo" />
      <nav>
        <ul className="main-nav">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("mobile")}
            className={menu === "mobile" ? "active" : ""}
          >
            Mobile app
          </li>
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>
      </nav>
      <div className="header-icons">
        <img src={icons.search_icon} alt="search icon" />
        <div>
          <img src={icons.basket_icon} alt="bag icon" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
