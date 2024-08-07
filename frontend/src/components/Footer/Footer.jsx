import "./Footer.css";
import { icons } from "../../utils/icons";

function Footer() {
  return (
    <footer className="main-footer" id="#footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={icons.logo} alt="food delicery logo " />
          <p>
            - Your go-to destination for fresh, delicious meals delivered
            straight to your door. Experience convenience and flavor with every
            order!
          </p>
          <div className="footer-social-icons">
            <img src={icons.facebook_icon} alt="facebook icon" />
            <img src={icons.twitter_icon} alt="twitter icon" />
            <img src={icons.linkedin_icon} alt="linked icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In touch</h2>
          <ul>
            <li>+92-333-552-33</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>&copy; {new Date().getFullYear()} Tomato. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
