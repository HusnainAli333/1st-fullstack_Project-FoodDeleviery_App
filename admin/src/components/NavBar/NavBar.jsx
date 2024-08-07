import { assets } from "../../utils/assets";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={assets.logo} className="logo" alt="logo of the company" />
      <img src={assets.profile_image} className="profile" alt="" />
    </nav>
  );
}

export default NavBar;
