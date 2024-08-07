import { createContext, useContext, useState } from "react";
import { foodList } from "../utils/foodList";

export const Context = createContext(null);

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  let cartTotal = cart?.reduce((prev, curr) => {
    return curr.price * curr.quantity + prev;
  }, 0);

  function addToCart(item) {
    if (!cart?.length) {
      return setCart([{ ...item, quantity: 1 }]);
    }
    return setCart((cartItems) => [...cartItems, { ...item, quantity: 1 }]);
  }

  function increaseQuantity(id) {
    return setCart((cart) =>
      cart?.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    return setCart((cart) => {
      cart?.map((item) => {
        if (item.quantity === 1) {
          return setCart((cart) => cart?.filter((item) => item._id !== id));
        } else {
          return item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }
      });
    });
  }

  function removeFromCart(id) {
    return setCart((cart) => cart.filter((item) => item._id !== id));
  }

  return (
    <Context.Provider
      value={{
        foodList,
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("Context is used outisde of the scope");

  return context;
}
export default ContextProvider;
