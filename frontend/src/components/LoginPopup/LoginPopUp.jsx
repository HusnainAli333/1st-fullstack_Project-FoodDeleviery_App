import { useState } from "react";
import { icons } from "../../utils/icons";
import { toast } from "react-toastify";
import { useAppContext } from "../../context/ContextProvider";
import axios from "axios";
import "./LoginPopup.css";

function LoginPopUp({ setShowLogin }) {
  const [state, setState] = useState("SignUp");
  const { token, setToken } = useAppContext();
  console.log(token);
  const [RegisterData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onChange(event) {
    const { name, value } = event.target;
    setRegisterData((s) => ({ ...s, [name]: value }));
  }

  async function onSubmit(data) {
    data.preventDefault();

    let URL;
    console.log(state);
    if (state === "login") {
      URL = "http://localhost:5000/api/login";
    } else {
      URL = "http://localhost:5000/api/register";
    }

    try {
      const response = await axios.post(URL, RegisterData);

      if (!response.data.success) {
        return toast.error(response.data.message);
      }
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        return toast.success(response.data.message);
      }

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onSubmit}>
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
            <input
              type="text"
              placeholder="Your Name"
              onChange={onChange}
              value={RegisterData.name}
              name="name"
              required
            />
          )}
          <input
            type="text"
            placeholder="Your Email"
            onChange={onChange}
            value={RegisterData.email}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            onChange={onChange}
            value={RegisterData.password}
            name="password"
            required
          />
        </div>
        <button type="submit">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condtions">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use &amp; privacy Policy.
          </p>
        </div>
        {state === "SignUp" ? (
          <p>
            Already have an Account?{" "}
            <span onClick={() => setState("Login")}>Login Here</span>
          </p>
        ) : (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setState("SignUp")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
