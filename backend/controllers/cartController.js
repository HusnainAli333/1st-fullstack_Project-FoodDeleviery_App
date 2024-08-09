import userModel from "../models/userModels.js";

async function addToCart(req, res) {
  const userCartData = await userModel.findOne({ _id: req.body.userId });
  const cartData = req.body.cartData;
  try {
    userCartData.cart.push(cartData);
    await userCartData.save();
    res.json({ success: true, message: "item added to the cart" });
  } catch (error) {
    res.json({ success: false, message: "Some Error Occured" });
  }
}

async function removeFromCart(req, res) {}

async function showCart(req, res) {}

export { addToCart, removeFromCart, showCart };
