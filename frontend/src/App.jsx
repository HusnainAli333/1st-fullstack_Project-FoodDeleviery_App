import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopup/LoginPopUp";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
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
