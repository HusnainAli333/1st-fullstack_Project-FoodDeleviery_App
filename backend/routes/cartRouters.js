import Express from "express";
import {
  addToCart,
  removeFromCart,
  showCart,
} from "../controllers/cartController.js";
import authMiddelWare from "../middleware/auth.js";
const cartRouter = Express.Router();

cartRouter.post("/add", authMiddelWare, addToCart);

cartRouter.post("/remove", authMiddelWare, removeFromCart);

cartRouter.post("/showcart", authMiddelWare, showCart);

export default cartRouter;
