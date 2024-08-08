import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import LoginPopUp from "./components/LoginPopup/LoginPopUp";
import ContextProvider from "./context/ContextProvider";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <ToastContainer />
      <ContextProvider>
        {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
        <Routes>
          <Route element={<Layout setShowLogin={setShowLogin} />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Route>
        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
