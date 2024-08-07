import mongoose from "mongoose";

export const DataBaseConnect = function () {
  mongoose
    .connect(
      "mongodb+srv://hasnain:HasnainAliMazhar69@food-del.fik8kyb.mongodb.net/food-del"
    )
    .then(() => console.log("db is connected"))
    .catch((err) => console.log(err));
};
