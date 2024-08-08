import { Link, Navigate, NavLink } from "react-router-dom";
import { icons } from "../../utils/icons";
import "./NavBar.css";
import { useAppContext } from "../../context/ContextProvider";

function Header({ setShowLogin }) {
  const { cartTotal } = useAppContext();
  const { token, setToken } = useAppContext();

  function handleLogout() {
    localStorage.removeItem("token");
    setToken("");
    Navigate("/");
  }

  return (
    <div className="main-header">
      <Link to="/">
        <img src={icons.logo} alt="icon of Logo" className="logo" />
      </Link>
      <nav>
        <ul className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Menu
          </NavLink>
          <NavLink
            to="/mobileapp"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Mobile app
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </ul>
      </nav>
      <div className="header-icons">
        <img src={icons.search_icon} alt="search icon" />
        <div>
          <Link to="/cart">
            <img src={icons.basket_icon} alt="bag icon" />
          </Link>
          <div className={cartTotal ? "dot" : ""}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin((c) => !c)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={icons.profile_icon} alt="profile icon" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={icons.bag_icon} alt="bag" />
                <p>orders</p>
              </li>
              <hr />
              <li>
                <img src={icons.logout_icon} alt="logout" />
                <p onClick={handleLogout}>logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
