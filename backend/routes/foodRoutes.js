import express from "express";
import multer from "multer";
import {
  addFood,
  fetchFood,
  removeFood,
} from "../controllers/foodController.js";
const foodRouter = express.Router();

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callBack) => {
    return callBack(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: Storage });

foodRouter.get("/fetchFood", fetchFood);
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
