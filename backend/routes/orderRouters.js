import Express from "express";
import { fetchOrder, postSendOrder } from "../controllers/orderController.js";
const orderRouter = Express.Router();

orderRouter.post("/add", postSendOrder);

orderRouter.get("/fetch", fetchOrder);

export default orderRouter;
