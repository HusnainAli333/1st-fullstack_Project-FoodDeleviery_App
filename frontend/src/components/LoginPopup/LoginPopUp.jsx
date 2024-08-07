import { useState } from "react";
import { icons } from "../../utils/icons";
import "./LoginPopup.css";

function LoginPopUp({ setShowLogin }) {
  const [state, setState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{state}</h2>
          <img
            src={icons.cross_icon}
            alt="cross icon"
            onClick={() => setShowLogin((c) => !c)}
          />
        </div>
        <div className="login-popup-inputs">
          {state === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="text" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>{state === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condtions">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use &amp; privacy Policy.
          </p>
        </div>
        {state === "Sign Up" ? (
          <p>
            Already have an Account?{" "}
            <span onClick={() => setState("Login")}>Login Here</span>
          </p>
        ) : (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
