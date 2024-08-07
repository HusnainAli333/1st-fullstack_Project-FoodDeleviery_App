import Express from "express";
import Cors from "cors";
import { DataBaseConnect } from "./config/database.js";
import foodRouter from "./routes/foodRoutes.js";

const PORT = 5000;
const App = Express();

App.use(Express.json());
App.use(Cors());

DataBaseConnect();

App.use("/api/food", foodRouter);
App.use("/images", Express.static("uploads"));

App.listen(PORT, () => {
  console.log("server is running");
});

//mongodb+srv://hasnain:HasnainAliMazhar69@food-del.fik8kyb.mongodb.net/?retryWrites=true&w=majority&appName=food-del
