import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";
import MobileDownload from "../MobileDownLoad/MobileDownload";

function Layout({ setShowLogin }) {
  return (
    <div className="app">
      <NavBar setShowLogin={setShowLogin} />
      <Outlet />
      <MobileDownload />
    </div>
  );
}

export default Layout;
