import { icons } from "../../utils/icons";
import "./style.css";

function MobileDownload() {
  return (
    <div className="app-download" id="#mobile-app">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platform">
        <img src={icons.play_store} alt="playstore" />
        <img src={icons.app_store} alt="App store" />
      </div>
    </div>
  );
}

export default MobileDownload;
