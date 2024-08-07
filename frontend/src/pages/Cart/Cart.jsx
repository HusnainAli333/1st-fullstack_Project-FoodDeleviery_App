import { useAppContext } from "../../context/ContextProvider";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, cartTotal } = useAppContext();
  const navigate = useNavigate();

  const DelevieryFee = !cart.length ? 0 : 2;
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cart.map((item) => {
          return (
            <CartItem
              key={item._id}
              item={item}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="total-item">
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${cartTotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${DelevieryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${cartTotal + DelevieryFee}</b>
            </div>
            <button onClick={() => navigate("/order")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a Promo Code,Enter here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItem({ item, removeFromCart }) {
  return (
    <>
      <div className="cart-items-title cart-items-item">
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{item.quantity}</p>
        <p>${item.price * item.quantity}</p>
        <p className="cross-icon" onClick={() => removeFromCart(item._id)}>
          <IoIosClose />
        </p>
      </div>
      <hr className="hr-item" />
    </>
  );
}
export default Cart;
